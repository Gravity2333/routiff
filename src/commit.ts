import {
  DELETE_ROUTES_FALG,
  MOUNT_ROUTES_FALG,
  MUTATE_ROUTES_FALG,
} from "./flags";
import { RouteMutation, RouteType } from "./typings";

/** commit 路径变更 */
export function commitRouteChanges<CustomRouteType extends RouteType>(
  customRoutes: CustomRouteType[],
  mutations: RouteMutation<CustomRouteType>[],
  completeRoutes: CustomRouteType[], // 全量配置库
) {
  for (const mutation of mutations) {
    const prevPaths = mutation.paths;

    // 1. 定义一个虚拟根节点作为查找入口
    const rootWrapper = {
      path: "",
      routes: customRoutes,
    } as unknown as CustomRouteType;

    // 2. 尝试查找，如果找不到，则通过 ensurePathNodes 自动补全
    let parentNode = findNodeByPath(rootWrapper, prevPaths);

    if (!parentNode) {
      // 补全路径，并获取最深层的父节点
      parentNode = ensurePathNodes(rootWrapper, completeRoutes, prevPaths);
    }

    if (!parentNode) continue; // 如果补全后还是没找到（说明 completeRoutes 里也没这路径），跳过

    const parentChilds = parentNode.routes || (parentNode.routes = []);

    switch (mutation.type) {
      case DELETE_ROUTES_FALG:
        commitDeletion(parentNode, parentChilds, mutation);
        break;
      case MOUNT_ROUTES_FALG:
        commitPlacement(parentNode, parentChilds, mutation);
        break;
      case MUTATE_ROUTES_FALG:
        commitMutation(parentNode, parentChilds, mutation);
        break;
    }
  }
  return customRoutes;
}

function commitDeletion<CustomRouteType extends RouteType>(
  parentNode: CustomRouteType,
  parentChilds: CustomRouteType[],
  mutation: RouteMutation<CustomRouteType>,
) {
  const index = parentChilds.findIndex(
    (parentChild) => parentChild.path === mutation?.current?.path,
  );
  if (index >= 0) {
    parentNode?.routes?.splice(index, 1);
  }
}

function commitPlacement<CustomRouteType extends RouteType>(
  parentNode: CustomRouteType,
  parentChilds: CustomRouteType[],
  mutation: RouteMutation<CustomRouteType>,
) {
  if (parentChilds.length === 0) {
    parentChilds.push({
      path: parentNode.path,
      redirect: mutation.wip?.path,
    } as any);
  }
  parentChilds.push(mutation.wip!);
}

function commitMutation<CustomRouteType extends RouteType>(
  parentNode: CustomRouteType,
  parentChilds: CustomRouteType[],
  mutation: RouteMutation<CustomRouteType>,
) {
  commitDeletion(parentNode, parentChilds, mutation);
  commitPlacement(parentNode, parentChilds, mutation);
}

function findNodeByPath<CustomRouteType extends RouteType>(
  route: CustomRouteType,
  targetPaths: string[],
  level: number = 0,
): CustomRouteType | null {
  // 1. 获取当前层级想要匹配的目标路径
  const target = targetPaths[level];

  // 2. 匹配逻辑：
  // 情况 A: 当前节点 path 直接等于目标 (例如 '/system')
  // 情况 B: 根节点特殊处理 (path 为空且 level 为 0)
  const isMatch = route.path === target || (route.path === "" && level === 0);

  if (isMatch) {
    // 如果匹配成功，且已经到达目标路径数组的末尾，则返回当前节点
    if (level === targetPaths.length - 1) {
      return route;
    }

    // 否则，在子节点中递归查找
    const childNodes = route.routes || [];
    for (const childNode of childNodes) {
      // 注意：如果当前是根节点匹配了路径数组的第 0 个，
      // 那么子节点应该去匹配路径数组的第 1 个，所以 level + 1
      const result = findNodeByPath<CustomRouteType>(
        childNode as CustomRouteType,
        targetPaths,
        level + 1,
      );
      if (result) return result;
    }
  }

  return null;
}

function ensurePathNodes<CustomRouteType extends RouteType>(
  currentCustomNode: CustomRouteType,
  completeRoutes: CustomRouteType[],
  targetPaths: string[],
  level: number = 0,
): CustomRouteType | null {
  // 1. 这里的 currentCustomNode 是当前层级的“容器”
  // 比如第一次进来是 root，第二次是 /analysis 的实体节点

  const nextPath = targetPaths[level + 1];

  // 如果没有下一级了，说明已经到了 targetPaths 的末尾节点
  if (!nextPath) {
    return currentCustomNode;
  }

  if (!currentCustomNode.routes) currentCustomNode.routes = [];

  // --- 重点：为当前节点添加指向下一级的重定向 ---
  // 注意：重定向节点的 path 应该和当前容器节点的 path 一致
  const currentPath = targetPaths[level];

  const hasRedirect = currentCustomNode.routes.some(
    (r) => r.path === currentPath && r.redirect,
  );
  if (!hasRedirect) {
    // 强制插入：path 是当前层，redirect 指向下一层
    currentCustomNode.routes.unshift({
      path: currentPath,
      redirect: nextPath,
    } as any);
  } else {
    // 更新现有的重定向
    const rdNode = currentCustomNode.routes.find(
      (r) => r.path === currentPath && r.redirect,
    );
    if (rdNode) rdNode.redirect = nextPath;
  }

  // --- 重点：寻找或补全下一级的“业务实体节点” ---
  let nextEntityNode = currentCustomNode.routes.find(
    (r) => r.path === nextPath && r.name,
  );

  if (!nextEntityNode) {
    const templateNode = findNodeInPool(completeRoutes, nextPath, true);
    if (templateNode) {
      nextEntityNode = { ...templateNode, routes: [] };
      currentCustomNode.routes.push(nextEntityNode);
    } else {
      return null;
    }
  }

  // 递归：去给 nextEntityNode 补它的子节点和重定向
  return ensurePathNodes(
    nextEntityNode,
    completeRoutes,
    targetPaths,
    level + 1,
  ) as CustomRouteType;
}

/**
 * 查找实体业务节点 (path 匹配且有 name)
 */
function findNodeInPool<CustomRouteType extends RouteType>(
  pool: RouteType[],
  targetPath: string,
  needName = true,
): RouteType | null {
  for (const node of pool) {
    if (node.path === targetPath && (needName ? !!node.name : true)) {
      return node;
    }
    if (node.routes) {
      const found = findNodeInPool(node.routes, targetPath, needName);
      if (found) return found;
    }
  }
  return null;
}
