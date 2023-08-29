import blogService from "../service/blogService";
import * as repl from "repl";

class BlogController{
    private blogService;
    constructor() {
        this.blogService = blogService
    }
    add = async (req,res)=>{
        let data = await this.blogService.add(req.body)
        res.json(data)
    }
    update = async (req,res) =>{
        let data = await this.blogService.update(req.params.id,req.body)
        res.json(data)
    }
    delete = async (req,res)=>{
        let data = await this.blogService.delete(req.params.id)
        res.json(data)
    }
    findById = async (req,res)=>{
        let data = await this.blogService.findById(req.params.id)
        res.json(data)
    }
    findAll = async (req,res)=>{
        let list
        if (req.query.title){
            list = await this.blogService.findByTitle(req.query.title)
        }else if (req.query.category){
            list = await this.blogService.findByCategory(req.query.category)
        }else if (req.query.startTime){
            list = await this.blogService.sortDate(req.query.startTime)
        }else {
            list = await this.blogService.findAll()
        }
        res.json(list)
    }
}
export default new BlogController()