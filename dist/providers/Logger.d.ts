import { Express } from 'express';
declare class Logger {
    init(server: Express): Express;
    private log;
    private list;
}
declare const _default: Logger;
export default _default;
