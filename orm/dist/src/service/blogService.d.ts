declare class BlogService {
    private blogRepository;
    constructor();
    add: (blog: any) => Promise<any>;
    delete: (id: any) => Promise<any>;
    update: (id: any, blog: any) => Promise<any>;
    findById: (id: any) => Promise<any>;
    findByTitle: (title: any) => Promise<any>;
    findByCategory: (cate: any) => Promise<any>;
    sortDate: (sortOrder: any) => Promise<void>;
    findAll: () => Promise<any>;
}
declare const _default: BlogService;
export default _default;
