import {body} from "express-validator";

export const generateNormalValidator = (field: string)=> {
    return body(`${field}`).notEmpty().withMessage(`Field ${field} should not be empty`);
};

export const generateNormalValidators = (fields: string[])=> {
    return fields.map((field) => {
        return body(`${field}`).notEmpty().withMessage(`Field ${field} should not be empty`)
    })
};