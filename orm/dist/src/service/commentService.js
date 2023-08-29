"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const comment_1 = require("../entity/comment");
class CommentService {
    constructor() {
        this.repository = data_source_1.AppDataSource.getRepository(comment_1.Comment);
        this.add = async (data) => {
            return await this.repository.save(data);
        };
        this.update = async (id, data) => {
            return await this.repository.update(id, data);
        };
        this.delete = async (id) => {
            return await this.repository.delete(id);
        };
        this.findAll = async () => {
            return await this.repository.find({
                relations: {
                    user: true
                }
            });
        };
    }
}
exports.default = new CommentService();
//# sourceMappingURL=commentService.js.map