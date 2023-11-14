import {Router} from "express";
import userAuthRouter from "./user-auth-routes.js";
import productRouter from "./product-management-routes.js";
import orderRouter from "./orders-management-routes.js";
import paymentRouter from "./payment-management-routes.js";

const mainRouter = Router();

mainRouter.use("/user",userAuthRouter)
mainRouter.use("/product",productRouter)
mainRouter.use("/orders",orderRouter)
mainRouter.use("/payment",paymentRouter)

export default mainRouter