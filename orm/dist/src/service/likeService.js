"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const typeorm_1 = require("typeorm");
class LikeService {
    constructor() {
        this.repository = data_source_1.AppDataSource.getRepository(typeorm_1.Like);
        this.add = async (data) => {
            return await this.repository.save(data);
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
exports.default = new LikeService();
//# sourceMappingURL=likeService.js.map