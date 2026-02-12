export function deepClone<T>(
  target: T,
  weakMap: WeakMap<any, any> = new WeakMap(),
) {
  /** 处理基本类型和function */
  if (
    target === null ||
    typeof target !== "object" ||
    typeof target === "function"
  ) {
    return target;
  }

  /** 处理缓存 */
  if (weakMap.has(target)) {
    return weakMap.get(target);
  }

  /** 处理内置类型Date */
  if (target instanceof Date) {
    const copy = new Date(target);
    weakMap.set(target, copy);
    return copy;
  }

  /** 处理内置类型Regexp */
  if (target instanceof RegExp) {
    const copy = new RegExp(target);
    weakMap.set(target, copy);
    return copy;
  }

  /** 处理内置类型Map */
  if (target instanceof Map) {
    const copy = new Map();
    weakMap.set(target, copy);
    target.forEach((value, key) => {
      copy.set(deepClone(key, weakMap), deepClone(value, weakMap));
    });
    return copy;
  }

  /** 处理内置类型Set */
  if (target instanceof Set) {
    const copy = new Set();
    weakMap.set(target, copy);
    target.forEach((value) => {
      copy.add(deepClone(value, weakMap));
    });
    return copy;
  }

  /** 处理Array 和 普通object */
  const copy: any = Array.isArray(target) ? [] : {};
  weakMap.set(target, copy);

  Reflect.ownKeys(target).map((key: any) => {
    copy[key] = deepClone((target as any)[key], weakMap);
  });

  return copy;
}
