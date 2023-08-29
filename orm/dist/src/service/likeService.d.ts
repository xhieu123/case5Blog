declare class LikeService {
    private repository;
    add: (data: any) => Promise<any>;
    delete: (id: any) => Promise<import("typeorm").DeleteResult>;
    findAll: () => Promise<import("typeorm").ObjectLiteral[]>;
}
declare const _default: LikeService;
export default _default;
