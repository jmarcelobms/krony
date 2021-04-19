import { Express } from 'express';
declare class Routes {
    routes: Map<string, string>;
    constructor();
    set(key: string, handler: string): void;
    get(path: string, handler: string): void;
    post(path: string, handler: string): void;
    put(path: string, handler: string): void;
    delete(path: string, handler: string): void;
    head(path: string, handler: string): void;
    connect(path: string, handler: string): void;
    options(path: string, handler: string): void;
    trace(path: string, handler: string): void;
    patch(path: string, handler: string): void;
    all(path: string, handler: string): void;
    serverRoutes(instances: Controller[], server: Express): void;
}
declare const _default: Routes;
export default _default;
