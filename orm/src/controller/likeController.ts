import likeService from "../service/likeService";

class LikeController{
    private likeService;
    constructor() {
        this.likeService = likeService;
    }
    add = async (req, res) => {
        let data = await this.likeService.add(req.body);
        res.json(data)
    }
    delete = async (req, res) => {
        let data = await this.likeService.delete(req.params.id);
        res.json(data)
    }
}
export default new LikeController()