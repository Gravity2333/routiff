import { commitRouteChanges } from "./commit";
import { diffRoutes as diff } from "./diff";
export default diff;
export const commit = commitRouteChanges;
export * from "./commit";
export * from "./diff";
export * from "./typings";

if (typeof window === 'object') {
  (window as any).diff = diff;
  (window as any).commit = commit;
}

if (typeof global === 'object') {
  (global as any).diff = diff;
  (global as any).commit = commit;
}
