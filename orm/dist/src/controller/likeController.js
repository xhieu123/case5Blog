"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const likeService_1 = __importDefault(require("../service/likeService"));
class LikeController {
    constructor() {
        this.add = async (req, res) => {
            let data = await this.likeService.add(req.body);
            res.json(data);
        };
        this.delete = async (req, res) => {
            let data = await this.likeService.delete(req.params.id);
            res.json(data);
        };
        this.likeService = likeService_1.default;
    }
}
exports.default = new LikeController();
//# sourceMappingURL=likeController.js.map