import {body} from "express-validator";

const loginValidator = [
    body("email").isEmail().notEmpty().withMessage("Email is required"),
    body("password").isLength({min:6}).withMessage("Invalid Password")
];
const signupValidator = [
    ...loginValidator,
    body("name").notEmpty().withMessage("Name is required"),
    body("phone").isMobilePhone('en-IN').withMessage("Invalid phone")
]