import { commitRouteChanges } from "./commit";
import { diffRoutes as diff } from "./diff";
export default diff;
export const commit = commitRouteChanges;
export * from "./commit";
export * from "./diff";
export * from "./typings";
