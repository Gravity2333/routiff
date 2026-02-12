/** Mutation 类型Flag */
export const MOUNT_ROUTES_FALG =
  typeof Symbol !== void 0 ? Symbol('MOUNT_ROUTES_FALG') : 'MOUNT_ROUTES_FALG';
export const DELETE_ROUTES_FALG =
  typeof Symbol !== void 0 ? Symbol('DELETE_ROUTES_FALG') : 'DELETE_ROUTES_FALG';
export const MUTATE_ROUTES_FALG =
  typeof Symbol !== void 0 ? Symbol('MUTATE_ROUTES_FALG') : 'MUTATE_ROUTES_FALG';

export  type MuatationType =
  | typeof MOUNT_ROUTES_FALG
  | typeof DELETE_ROUTES_FALG
  | typeof MUTATE_ROUTES_FALG;
