import {Router} from "express";
import {getAllUsers, getUserById, userLogin, userSignup} from "../controllers/user-auth.js";

const userAuthRouter = Router();
userAuthRouter.get("/all",getAllUsers)
userAuthRouter.get("/:id",getUserById)
userAuthRouter.post("/login", userLogin)
userAuthRouter.post("/signup",userSignup)

export default userAuthRouter;