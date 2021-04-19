import { Express } from 'express';
declare function Core(config?: Config): Promise<{
    init: (server: Express) => Express;
}>;
export { Core };
