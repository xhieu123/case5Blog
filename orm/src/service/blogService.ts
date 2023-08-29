import {AppDataSource} from "../data-source";
import {Blog} from "../entity/blog";
import {Like} from "typeorm";

class BlogService {
    private blogRepository;

    constructor() {
        this.blogRepository = AppDataSource.getRepository(Blog);
    }

    add = async (blog) => {
        return await this.blogRepository.save(blog)
    }
    delete = async (id) => {
        return await this.blogRepository.delete(id)
    }
    update = async (id,blog) => {
        return await this.blogRepository.update(id,blog)
    }
    findById = async (id) => {
        return await this.blogRepository.find({
            where: {
                id: id
            }
        })
    }
    findByTitle = async (title) => {
        return await this.blogRepository.find({
            where: {
                title: Like(`%${title}%`)
            }
        })
    }
    findByCategory = async (cate) => {
        return await this.blogRepository.find({
            where: {
                category: Like(`%${cate}%`)
            }
        })
    }
    sortDate = async (sortOrder) => {
        let list;
        if (sortOrder === 'ASC'){
            list = await this.blogRepository.find({
                order:{startTime:"asc"}
            })
        }else if (sortOrder === 'DESC'){
            list = await this.blogRepository.find({
                order:{startTime:"desc"}
            })
        }else {
            // Xử lý khi sortOrder không hợp lệ, ví dụ: mặc định sắp xếp theo giá tăng dần
            list = await this.blogRepository.find({
                order: { startTime: "asc" }
            });
        }
    }
    findAll = async ()=>{
        return await this.blogRepository.find({
            relations:{
                user: true
            }
        })
    }
}

export default new BlogService();
