"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.diffRoutes = diffRoutes;
const flags_1 = require("./flags");
const deepClone_1 = require("./utils/deepClone");
function diffRoutes(currentRoutes, newRoutes) {
    const wipRoutes = (0, deepClone_1.deepClone)(newRoutes);
    const mutations = collectMutations(currentRoutes, wipRoutes);
    return mutations;
}
function collectMutations(currents, wips) {
    const mutations = [];
    travserAndCollectMutationsDFS({
        path: "virtual",
        routes: currents,
    }, {
        path: "virtual",
        routes: wips,
    }, {
        mutations,
        currentRoutesPath: ["/"],
    });
    return mutations;
}
function travserAndCollectMutationsDFS(current, wip, context) {
    if (current && !wip) {
        return context.mutations.push({
            type: flags_1.DELETE_ROUTES_FALG,
            paths: [...context.currentRoutesPath],
            current,
            wip: null,
        });
    }
    else if (!current && wip) {
        return context.mutations.push({
            type: flags_1.MOUNT_ROUTES_FALG,
            paths: [...context.currentRoutesPath],
            current: null,
            wip,
        });
    }
    else if (!current && !wip) {
        return;
    }
    if (!isRouteNodeSame(current, wip)) {
        context.mutations.push({
            type: flags_1.DELETE_ROUTES_FALG,
            paths: [...context.currentRoutesPath],
            current,
            wip: null,
        }, {
            type: flags_1.MOUNT_ROUTES_FALG,
            paths: [...context.currentRoutesPath],
            current: null,
            wip,
        });
    }
    else {
        const currentChilds = current.routes || [];
        const currentChildMap = new Map();
        currentChilds.forEach((currentChild) => {
            currentChildMap.set(currentChild.path, currentChild);
        });
        const wipChilds = wip.routes || [];
        for (let i = 0; i < wipChilds?.length; i++) {
            const wipChild = wipChilds[i];
            if (!wipChild)
                continue;
            const wipChildPath = wipChild?.path;
            if (currentChildMap.has(wipChildPath)) {
                const currentChildNodeFromMap = currentChildMap.get(wipChildPath);
                currentChildMap.delete(wipChildPath);
                travserAndCollectMutationsDFS(currentChildNodeFromMap, wipChild, {
                    mutations: context.mutations,
                    currentRoutesPath: [...context.currentRoutesPath, wipChildPath],
                });
            }
            else {
                context.mutations.push({
                    type: flags_1.MOUNT_ROUTES_FALG,
                    paths: [...context.currentRoutesPath],
                    current: null,
                    wip: wipChild,
                });
            }
        }
        currentChildMap.forEach((needDelNode) => {
            context.mutations.push({
                type: flags_1.DELETE_ROUTES_FALG,
                paths: [...context.currentRoutesPath],
                current: needDelNode,
                wip: null,
            });
        });
    }
}
function isRouteNodeSame(current, wip) {
    if (current === wip)
        return true;
    if (!current || !wip)
        return false;
    const keys = Object.keys(current);
    const wipKeys = Object.keys(wip);
    if (keys.length !== wipKeys.length)
        return false;
    return keys.every((key) => {
        if (key === "routes")
            return true;
        return Object.is(current[key], wip[key]);
    });
}
//# sourceMappingURL=diff.js.map