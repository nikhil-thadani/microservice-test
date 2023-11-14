import {Router} from "express";
import {getAllUsers, userLogin, userSignup} from "../controllers/index.js";

const mainRouter = Router();

mainRouter.get("/",getAllUsers)
mainRouter.post("/verify",userLogin)
mainRouter.post("/new",userSignup)

export default mainRouter