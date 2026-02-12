"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deepClone = deepClone;
function deepClone(target, weakMap = new WeakMap()) {
    if (target === null ||
        typeof target !== "object" ||
        typeof target === "function") {
        return target;
    }
    if (weakMap.has(target)) {
        return weakMap.get(target);
    }
    if (target instanceof Date) {
        const copy = new Date(target);
        weakMap.set(target, copy);
        return copy;
    }
    if (target instanceof RegExp) {
        const copy = new RegExp(target);
        weakMap.set(target, copy);
        return copy;
    }
    if (target instanceof Map) {
        const copy = new Map();
        weakMap.set(target, copy);
        target.forEach((value, key) => {
            copy.set(deepClone(key, weakMap), deepClone(value, weakMap));
        });
        return copy;
    }
    if (target instanceof Set) {
        const copy = new Set();
        weakMap.set(target, copy);
        target.forEach((value) => {
            copy.add(deepClone(value, weakMap));
        });
        return copy;
    }
    const copy = Array.isArray(target) ? [] : {};
    weakMap.set(target, copy);
    Reflect.ownKeys(target).map((key) => {
        copy[key] = deepClone(target[key], weakMap);
    });
    return copy;
}
//# sourceMappingURL=deepClone.js.map