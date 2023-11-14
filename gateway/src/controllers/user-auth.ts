import {Request, Response} from "express";
import {sendRequest} from "../axios-basic/index.js";
import {handleErrorResponse, handleSuccessResponse} from "../utls/response-handlers.js";

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const data = await sendRequest("http://localhost:5001/userauth", "GET");
        if(!data) {
            return handleErrorResponse(res, null);
        }
        return handleSuccessResponse(res, data);
    } catch(error) {
        return handleErrorResponse(res, error);

    }

};

export const userSignup = async (req: Request, res: Response) => {
    try {
        const {name, email, password, phone} = req.body;
        const data = await sendRequest("http://localhost:5001/userauth/new", "POST", {name, email, password, phone});
        if(!data) {
            return handleErrorResponse(res, null);
        }
        return handleSuccessResponse(res, data);
    } catch(error) {
        return handleErrorResponse(res, error);

    }
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