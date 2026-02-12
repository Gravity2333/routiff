"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commitRouteChanges = commitRouteChanges;
const flags_1 = require("./flags");
function commitRouteChanges(customRoutes, mutations, completeRoutes) {
    for (const mutation of mutations) {
        const prevPaths = mutation.paths;
        const rootWrapper = {
            path: "",
            routes: customRoutes,
        };
        let parentNode = findNodeByPath(rootWrapper, prevPaths);
        if (!parentNode) {
            parentNode = ensurePathNodes(rootWrapper, completeRoutes, prevPaths);
        }
        if (!parentNode)
            continue;
        const parentChilds = parentNode.routes || (parentNode.routes = []);
        switch (mutation.type) {
            case flags_1.DELETE_ROUTES_FALG:
                commitDeletion(parentNode, parentChilds, mutation);
                break;
            case flags_1.MOUNT_ROUTES_FALG:
                commitPlacement(parentNode, parentChilds, mutation);
                break;
            case flags_1.MUTATE_ROUTES_FALG:
                commitMutation(parentNode, parentChilds, mutation);
                break;
        }
    }
    return customRoutes;
}
function commitDeletion(parentNode, parentChilds, mutation) {
    const index = parentChilds.findIndex((parentChild) => parentChild.path === mutation?.current?.path);
    if (index >= 0) {
        parentNode?.routes?.splice(index, 1);
    }
}
function commitPlacement(parentNode, parentChilds, mutation) {
    if (parentChilds.length === 0) {
        parentChilds.push({
            path: parentNode.path,
            redirect: mutation.wip?.path,
        });
    }
    parentChilds.push(mutation.wip);
}
function commitMutation(parentNode, parentChilds, mutation) {
    commitDeletion(parentNode, parentChilds, mutation);
    commitPlacement(parentNode, parentChilds, mutation);
}
function findNodeByPath(route, targetPaths, level = 0) {
    const target = targetPaths[level];
    const isMatch = route.path === target || (route.path === "" && level === 0);
    if (isMatch) {
        if (level === targetPaths.length - 1) {
            return route;
        }
        const childNodes = route.routes || [];
        for (const childNode of childNodes) {
            const result = findNodeByPath(childNode, targetPaths, level + 1);
            if (result)
                return result;
        }
    }
    return null;
}
function ensurePathNodes(currentCustomNode, completeRoutes, targetPaths, level = 0) {
    const nextPath = targetPaths[level + 1];
    if (!nextPath) {
        return currentCustomNode;
    }
    if (!currentCustomNode.routes)
        currentCustomNode.routes = [];
    const currentPath = targetPaths[level];
    const hasRedirect = currentCustomNode.routes.some((r) => r.path === currentPath && r.redirect);
    if (!hasRedirect) {
        currentCustomNode.routes.unshift({
            path: currentPath,
            redirect: nextPath,
        });
    }
    else {
        const rdNode = currentCustomNode.routes.find((r) => r.path === currentPath && r.redirect);
        if (rdNode)
            rdNode.redirect = nextPath;
    }
    let nextEntityNode = currentCustomNode.routes.find((r) => r.path === nextPath && r.name);
    if (!nextEntityNode) {
        const templateNode = findNodeInPool(completeRoutes, nextPath, true);
        if (templateNode) {
            nextEntityNode = { ...templateNode, routes: [] };
            currentCustomNode.routes.push(nextEntityNode);
        }
        else {
            return null;
        }
    }
    return ensurePathNodes(nextEntityNode, completeRoutes, targetPaths, level + 1);
}
function findNodeInPool(pool, targetPath, needName = true) {
    for (const node of pool) {
        if (node.path === targetPath && (needName ? !!node.name : true)) {
            return node;
        }
        if (node.routes) {
            const found = findNodeInPool(node.routes, targetPath, needName);
            if (found)
                return found;
        }
    }
    return null;
}
//# sourceMappingURL=commit.js.map