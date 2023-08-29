declare class LikeController {
    private likeService;
    constructor();
    add: (req: any, res: any) => Promise<void>;
    delete: (req: any, res: any) => Promise<void>;
}
declare const _default: LikeController;
export default _default;
