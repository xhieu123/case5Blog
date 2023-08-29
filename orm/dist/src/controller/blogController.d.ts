declare class BlogController {
    private blogService;
    constructor();
    add: (req: any, res: any) => Promise<void>;
    update: (req: any, res: any) => Promise<void>;
    delete: (req: any, res: any) => Promise<void>;
    findById: (req: any, res: any) => Promise<void>;
    findAll: (req: any, res: any) => Promise<void>;
}
declare const _default: BlogController;
export default _default;
