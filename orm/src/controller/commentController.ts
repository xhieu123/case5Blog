import commentService from "../service/commentService";

class CommentController{
    private commentService;
    constructor() {
        this.commentService = commentService;
    }
    add = async (req, res) => {
        let data = await this.commentService.add(req.body);
        res.json(data)
    }
    delete = async (req, res) => {
        let data = await this.commentService.delete(req.params.id);
        res.json(data)
    }
}
export default new CommentController()