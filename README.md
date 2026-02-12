# Routiff

一个轻量级、高性能的路由 Diff 与补全工具。支持嵌套路由对比、路径自动补全以及基于 Mutation 的增量更新。

[![npm version](https://img.shields.io/npm/v/routiff.svg)](https://www.npmjs.com/package/routiff)
[![license](https://img.shields.io/npm/l/routiff.svg)](https://github.com/your-username/routiff)

## ✨ 特性

- 🚀 **智能 Diff**: 深度优先遍历 (DFS) 算法，精确识别路由的 `MOUNT`、`DELETE` 和 `MUTATE`。
- 🛠️ **自动路径补全**: 在提交变更时，如果父级路径不存在，可根据完整路由配置库自动补全。
- 🌳 **支持嵌套**: 完美处理无限层级的 `routes` 嵌套结构。
- 🧬 **类型安全**: 原生支持 TypeScript，提供完整的类型定义。
- 🔁 **循环引用保护**: 内置 `deepClone` 处理循环引用和特殊对象（Date, RegExp）。

---

## 📦 安装

```bash
npm install routiff
# 或者
yarn add routiff
```

---

## 🚀 快速上手

### 1️⃣ 基础 Diff 逻辑

对比两组路由配置并生成变更记录（Mutations）。

```ts
import { diffRoutes } from 'routiff';

const oldRoutes = [
  { path: '/system', name: '系统管理', routes: [] }
];

const newRoutes = [
  { 
    path: '/system', 
    name: '系统管理', 
    routes: [{ path: '/user', name: '用户管理' }] 
  }
];

const mutations = diffRoutes(oldRoutes, newRoutes);

// 返回示例
// [{
//   type: 'MOUNT_ROUTES_FALG',
//   paths: ['/', '/system'],
//   wip: { path: '/user', name: '用户管理' }
// }]
```

---

### 2️⃣ 应用变更 (Commit Changes)

将生成的变更应用到目标路由树上，并自动补全缺失的中间节点。

```ts
import { commitRouteChanges } from 'routiff';

const currentCustomRoutes = []; // 当前用户已有的路由
const allSystemRoutes = [...];  // 全量路由池，用于补全中间路径

const updatedRoutes = commitRouteChanges(
  currentCustomRoutes,
  mutations,
  allSystemRoutes
);
```

---

## 📖 API 概览

### `diffRoutes(current, next)`

对比两个路由树，返回 `RouteMutation[]`。

### `commitRouteChanges(custom, mutations, pool)`

- `custom`: 待操作的动态路由树  
- `mutations`: 由 `diffRoutes` 产生的变更列表  
- `pool`: 当路径缺失时，用于拉取完整节点信息的模板池  

### `deepClone(target)`

深拷贝工具，支持处理 `Map`, `Set`, `Date`, `RegExp` 及循环引用。

---

## ⚙️ 类型定义

```ts
type MuatationType =
  | 'MOUNT_ROUTES_FALG'
  | 'DELETE_ROUTES_FALG'
  | 'MUTATE_ROUTES_FALG';

interface RouteMutation {
  type: MuatationType;
  paths: string[]; // 溯源路径栈
  current: RouterConfigDisplay | null;
  wip: RouterConfigDisplay | null;
}
```

---

## 🤝 贡献

欢迎提交 Pull Request 或报告 Issue！

---

## 📄 开源协议

MIT
# routiff
