import { Express } from 'express';
declare class Routes {
    routes: Map<string, string>;
    constructor();
    set(key: string, handler: string): void;
    serverRoutes(instances: Controller[], server: Express): void;
}
declare const _default: Routes;
export default _default;
