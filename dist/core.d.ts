import { Express } from 'express';
declare class Core {
    private config;
    constructor(_config?: Config);
    init(server: Express): Promise<Express>;
}
export default Core;
