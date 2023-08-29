import { Comment } from "../entity/comment";
declare class CommentService {
    private repository;
    add: (data: any) => Promise<any>;
    update: (id: any, data: any) => Promise<import("typeorm").UpdateResult>;
    delete: (id: any) => Promise<import("typeorm").DeleteResult>;
    findAll: () => Promise<Comment[]>;
}
declare const _default: CommentService;
export default _default;
