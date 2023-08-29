import {AppDataSource} from "../data-source";
import {Like} from "typeorm";

class LikeService{
    private repository = AppDataSource.getRepository(Like)
    add = async (data)=>{
        return await this.repository.save(data)
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
export default new LikeService();