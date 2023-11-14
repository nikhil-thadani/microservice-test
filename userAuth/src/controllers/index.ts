import {Request, Response} from "express";
import {handleSuccessResponse} from "../utls/response-handlers.js";
import {sendRequest} from "../axios-basic/index.js";
import {ServerUrls} from "../utls/constant.js";
import bcrypt from 'bcrypt';

export const getAllUsers = async (req: Request, res: Response) => {
    const URL = `${ServerUrls.DB}/db/users`;
    const users = await sendRequest(URL, "GET");
    return res.json({users});
};

export const userSignup = async (req: Request, res: Response) => {
    const {name, email, password, phone} = req.body;

    const URL = `${ServerUrls.DB}/db/users`;
    const hashesPass = await bcrypt.hash(password, 10);
    const user = await sendRequest(URL, "POST", {name, email, password: hashesPass, phone});
    return res.json({user});
};


export const userLogin = (req: Request, res: Response) => {
    // userlogin userauth
};

export const getUserById = (req: Request, res: Response) => {
    // userlogin userauth
};

export const getUserByEmail = () => {
    // userlogin userauth
};

export const updateUserDetails = () => {
    // userlogin userauth
};