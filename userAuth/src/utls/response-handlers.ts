import {Response} from "express";
import {HttpStatusCode} from 'axios'

export const handleSuccessResponse = (res: Response, data: unknown, status?: HttpStatusCode): Response => {
    return res.status(status ?? HttpStatusCode.Ok).json({message:"Success",data})
};
export const handleErrorResponse = (res: Response, data: unknown, status?: HttpStatusCode): Response => {
    return res.status(status ?? HttpStatusCode.InternalServerError).json({message:"Error",data})
}