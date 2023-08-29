"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commentService_1 = __importDefault(require("../service/commentService"));
class CommentController {
    constructor() {
        this.add = async (req, res) => {
            let data = await this.commentService.add(req.body);
            res.json(data);
        };
        this.delete = async (req, res) => {
            let data = await this.commentService.delete(req.params.id);
            res.json(data);
        };
        this.commentService = commentService_1.default;
    }
}
exports.default = new CommentController();
//# sourceMappingURL=commentController.js.map