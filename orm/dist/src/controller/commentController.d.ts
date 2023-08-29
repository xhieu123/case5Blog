declare class CommentController {
    private commentService;
    constructor();
    add: (req: any, res: any) => Promise<void>;
    delete: (req: any, res: any) => Promise<void>;
}
declare const _default: CommentController;
export default _default;
