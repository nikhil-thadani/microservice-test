import {body, param} from "express-validator";
import {generateNormalValidators} from "./dynamic-generator.js";

export const newProductValidator = [
    ...generateNormalValidators(['title', 'description','warranty','actualPrice','discountedPrice','deliveryTime']),
];

export const paramsValidator = [
    param('id').notEmpty().isMongoId()
]