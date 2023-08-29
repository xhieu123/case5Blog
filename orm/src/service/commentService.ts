import {AppDataSource} from "../data-source";
import {Comment} from "../entity/comment";

class CommentService{
    private repository = AppDataSource.getRepository(Comment)
    add = async (data)=>{
        return await this.repository.save(data)
    }
    update = async (id,data)=>{
        return await this.repository.update(id,data)
    }
    delete = async (id)=>{
        return await this.repository.delete(id)
    }
    findAll = async ()=>{
        return await this.repository.find({
            relations:{
                user: true
            }
        })
    }
}
export default new CommentService()