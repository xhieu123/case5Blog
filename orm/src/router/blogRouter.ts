import {Router} from "express";
import blogController from "../controller/blogController";

const blogRouter = Router();
blogRouter.get('/',blogController.findAll);
blogRouter.get('/:id',blogController.findById)
blogRouter.post('',blogController.add);
blogRouter.put('/:id',blogController.update)
blogRouter.delete('/:id',blogController.delete);
export default blogRouter;