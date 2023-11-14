import {Router} from "express";
import userRouter from "./user-routes.js";
import productRouter from "./products-router.js";
import orderRouter from "./orders-router.js";
import paymentsRouter from "./payment-router.js";
import imagesRouter from "./images-router.js";

const mainRouter = Router();

mainRouter.use("/users",userRouter)
mainRouter.use("/products",productRouter)
mainRouter.use("/orders",orderRouter)
mainRouter.use("/payments",paymentsRouter)
mainRouter.use("/images",imagesRouter)

export default mainRouter