"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const blog_1 = require("../entity/blog");
const typeorm_1 = require("typeorm");
class BlogService {
    constructor() {
        this.add = async (blog) => {
            return await this.blogRepository.save(blog);
        };
        this.delete = async (id) => {
            return await this.blogRepository.delete(id);
        };
        this.update = async (id, blog) => {
            return await this.blogRepository.update(id, blog);
        };
        this.findById = async (id) => {
            return await this.blogRepository.find({
                where: {
                    id: id
                }
            });
        };
        this.findByTitle = async (title) => {
            return await this.blogRepository.find({
                where: {
                    title: (0, typeorm_1.Like)(`%${title}%`)
                }
            });
        };
        this.findByCategory = async (cate) => {
            return await this.blogRepository.find({
                where: {
                    category: (0, typeorm_1.Like)(`%${cate}%`)
                }
            });
        };
        this.sortDate = async (sortOrder) => {
            let list;
            if (sortOrder === 'ASC') {
                list = await this.blogRepository.find({
                    order: { startTime: "asc" }
                });
            }
            else if (sortOrder === 'DESC') {
                list = await this.blogRepository.find({
                    order: { startTime: "desc" }
                });
            }
            else {
                list = await this.blogRepository.find({
                    order: { startTime: "asc" }
                });
            }
        };
        this.findAll = async () => {
            return await this.blogRepository.find({
                relations: {
                    user: true
                }
            });
        };
        this.blogRepository = data_source_1.AppDataSource.getRepository(blog_1.Blog);
    }
}
exports.default = new BlogService();
//# sourceMappingURL=blogService.js.map