import { DELETE_ROUTES_FALG, MOUNT_ROUTES_FALG } from "./flags";
import { RouteMutation, RouteType } from "./typings";
import { deepClone } from "./utils/deepClone";

/**
 * 对比路径DIFF
 * @param currentRoutes 旧的路径（已经渲染的路径）
 * @param newRoutes 当前最新的路径
 */
export function diffRoutes<CustomRouteType extends RouteType>(
  currentRoutes: CustomRouteType[],
  newRoutes: CustomRouteType[],
) {
  /** 拷贝一份最新的路由，在拷贝的路由上进行Patch */
  const wipRoutes = deepClone(newRoutes);
  const mutations = collectMutations(currentRoutes, wipRoutes);
  return mutations;
}

/**
 * 遍历routes 查找变动
 * @param currents
 * @param wips
 * @returns
 */
function collectMutations<CustomRouteType extends RouteType>(
  currents: CustomRouteType[],
  wips: CustomRouteType[],
) {
  const mutations: RouteMutation<CustomRouteType>[] = [];
  travserAndCollectMutationsDFS(
    {
      path: "virtual",
      routes: currents,
    } as any,
    {
      path: "virtual",
      routes: wips,
    } as any,
    {
      mutations,
      currentRoutesPath: ["/"],
    },
  );

  return mutations;
}

/**
 * 深度优先遍历并且收集变动节点
 * @param current
 * @param wip
 * @param context
 * @returns
 */
function travserAndCollectMutationsDFS<CustomRouteType extends RouteType>(
  current: CustomRouteType,
  wip: CustomRouteType,
  context: {
    mutations: RouteMutation<CustomRouteType>[];
    currentRoutesPath: string[];
  },
) {
  if (current && !wip) {
    // console.log('已经删除', current);
    /** 当前节点已经被删除了 */
    return context.mutations.push(
      /**
       * 删除旧节点的Mutation
       */
      {
        type: DELETE_ROUTES_FALG,
        paths: [...context.currentRoutesPath],
        current,
        wip: null,
      },
    );
  } else if (!current && wip) {
    // console.log('新增节点', wip);
    return context.mutations.push(
      /**
       * 增加新节点的Mutation
       */
      {
        type: MOUNT_ROUTES_FALG,
        paths: [...context.currentRoutesPath],
        current: null,
        wip,
      },
    );
  } else if (!current && !wip) {
    /** 都不存在 直接return */
    return;
  }

  /** 存在新旧节点的情况 */
  if (!isRouteNodeSame(current, wip)) {
    // console.log('节点变化', current, wip);
    // 不相同 直接不用比较子节点了
    context.mutations.push(
      /**
       * 删除旧节点的Mutation
       */
      {
        type: DELETE_ROUTES_FALG,
        paths: [...context.currentRoutesPath],
        current,
        wip: null,
      },
      /**
       * 增加新节点的Mutation
       */
      {
        type: MOUNT_ROUTES_FALG,
        paths: [...context.currentRoutesPath],
        current: null,
        wip,
      },
    );
  } else {
    // 相同 比较子节点
    const currentChilds = current.routes || [];
    const currentChildMap = new Map();
    currentChilds.forEach((currentChild) => {
      currentChildMap.set(currentChild.path, currentChild);
    });
    const wipChilds = wip.routes || [];
    for (let i = 0; i < wipChilds?.length; i++) {
      const wipChild = wipChilds[i];
      if (!wipChild) continue;
      const wipChildPath = wipChild?.path;

      if (currentChildMap.has(wipChildPath)) {
        const currentChildNodeFromMap = currentChildMap.get(wipChildPath);
        //  删除已经处理过的旧节点
        currentChildMap.delete(wipChildPath);
        travserAndCollectMutationsDFS(currentChildNodeFromMap, wipChild, {
          mutations: context.mutations,
          currentRoutesPath: [...context.currentRoutesPath, wipChildPath],
        });
      } else {
        // console.log('子节点增加', wipChild);
        // 直接添加节点
        context.mutations.push(
          /**
           * 增加新节点的Mutation
           */
          {
            type: MOUNT_ROUTES_FALG,
            paths: [...context.currentRoutesPath],
            current: null,
            wip: wipChild as any,
          },
        );
      }
    }

    // 把剩下的节点 标记为删除
    currentChildMap.forEach((needDelNode) => {
      // console.log('子节点删除', current, wip);
      context.mutations.push(
        /**
         * 删除旧节点的Mutation
         */
        {
          type: DELETE_ROUTES_FALG,
          paths: [...context.currentRoutesPath],
          current: needDelNode,
          wip: null,
        },
      );
    });
  }
}

/**
 * 比较单个 Route 节点的基本信息是否相同 (不对比 routes 数组)
 */
function isRouteNodeSame<T extends RouteType>(current: T, wip: T): boolean {
  // 引用相同，或者都为 null/undefined，视为相同
  if (current === wip) return true;
  if (!current || !wip) return false;

  // 获取当前节点所有属性的 key
  const keys = Object.keys(current) as (keyof T)[];

  // 检查 keys 数量是否一致，不一致肯定不同
  const wipKeys = Object.keys(wip);
  if (keys.length !== wipKeys.length) return false;

  // 使用 every 检查所有一层属性是否一致
  return keys.every((key) => {
    // 忽略 routes 子路由数组的对比
    if (key === "routes") return true;

    // 对比基本类型值
    return Object.is(current[key], wip[key]);
  });
}
