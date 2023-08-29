import {Router} from "express";
import blogRouter from "./blogRouter";
import {userRouter} from "./userRrouter";


const router = Router();
router.use('/blogs', blogRouter);
router.use('/', userRouter);

export default router;
