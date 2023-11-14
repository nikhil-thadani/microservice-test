import {Request, Response} from "express";
import User from "../models/User.js";
import {handleErrorResponse, handleSuccessResponse} from "../utls/response-handlers.js";
import {HttpStatusCode} from "axios";

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await User.find().select(["name", 'email', 'id']);
        return handleSuccessResponse(res, users);
    } catch(error) {
        return handleErrorResponse(res, error);

    }
};

export const createUser = async (req: Request, res: Response) => {
    try {
        const {name, email, password, phone} = req.body;
        console.log(name, email, password, phone);

        const existingUser = await User.findOne({email});
        if(existingUser) return handleErrorResponse(res, {error: "user already exists with this email"});
        const user = new User({name, email, password, phone});
        await user.save();
        return handleSuccessResponse(res, {id: user.id}, HttpStatusCode.Created);
    } catch(error) {
        return handleErrorResponse(res, {error});

    }
};

export const updateUser = (req: Request, res: Response) => {

};
export const deleteUser = (req: Request, res: Response) => {

};

