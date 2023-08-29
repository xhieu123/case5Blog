"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const blogService_1 = __importDefault(require("../service/blogService"));
class BlogController {
    constructor() {
        this.add = async (req, res) => {
            let data = await this.blogService.add(req.body);
            res.json(data);
        };
        this.update = async (req, res) => {
            let data = await this.blogService.update(req.params.id, req.body);
            res.json(data);
        };
        this.delete = async (req, res) => {
            let data = await this.blogService.delete(req.params.id);
            res.json(data);
        };
        this.findById = async (req, res) => {
            let data = await this.blogService.findById(req.params.id);
            res.json(data);
        };
        this.findAll = async (req, res) => {
            let list;
            if (req.query.title) {
                list = await this.blogService.findByTitle(req.query.title);
            }
            else if (req.query.category) {
                list = await this.blogService.findByCategory(req.query.category);
            }
            else if (req.query.startTime) {
                list = await this.blogService.sortDate(req.query.startTime);
            }
            else {
                list = await this.blogService.findAll();
            }
            res.json(list);
        };
        this.blogService = blogService_1.default;
    }
}
exports.default = new BlogController();
//# sourceMappingURL=blogController.js.map