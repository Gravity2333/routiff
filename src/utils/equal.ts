import { RouteType } from "../typings";

/**
 * 判断是否为基本类型
 */
function isPrimitive(value: unknown): boolean {
  return (
    value === null ||
    (typeof value !== "object" && typeof value !== "function")
  );
}

/**
 * 比较单个 Route 节点的基本信息是否相同 (只对比基本类型，不对比 routes)
 */
export function isRouteNodeSame<T extends RouteType>(
  current: T,
  wip: T
): boolean {
  if (current === wip) return true;
  if (!current || !wip) return false;

  const currentKeys = Object.keys(current) as (keyof T)[];
  const wipKeys = Object.keys(wip) as (keyof T)[];

  // 只筛选出基本类型 key（排除 routes）
  const primitiveKeys = currentKeys.filter((key) => {
    if (key === "routes") return false;
    return isPrimitive(current[key]);
  });

  const wipPrimitiveKeys = wipKeys.filter((key) => {
    if (key === "routes") return false;
    return isPrimitive(wip[key]);
  });

  // 基本字段数量不同直接 false
  if (primitiveKeys.length !== wipPrimitiveKeys.length) return false;

  // 对比基本类型字段
  return primitiveKeys.every((key) =>
    Object.is(current[key], wip[key])
  );
}
