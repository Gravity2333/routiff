import { MuatationType } from "./flags";
export interface RouteType {
    name?: string;
    path: string;
    routes: RouteType[];
    redirect?: string;
}
export interface RouteMutation<CustomRouteType extends RouteType> {
    type: MuatationType;
    paths: string[];
    current: CustomRouteType | null;
    wip: CustomRouteType | null;
}
//# sourceMappingURL=typings.d.ts.map