"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isRouteNodeSame = isRouteNodeSame;
function isPrimitive(value) {
    return (value === null ||
        (typeof value !== "object" && typeof value !== "function"));
}
function isRouteNodeSame(current, wip) {
    if (current === wip)
        return true;
    if (!current || !wip)
        return false;
    const currentKeys = Object.keys(current);
    const wipKeys = Object.keys(wip);
    const primitiveKeys = currentKeys.filter((key) => {
        if (key === "routes")
            return false;
        return isPrimitive(current[key]);
    });
    const wipPrimitiveKeys = wipKeys.filter((key) => {
        if (key === "routes")
            return false;
        return isPrimitive(wip[key]);
    });
    if (primitiveKeys.length !== wipPrimitiveKeys.length)
        return false;
    return primitiveKeys.every((key) => Object.is(current[key], wip[key]));
}
//# sourceMappingURL=equal.js.map