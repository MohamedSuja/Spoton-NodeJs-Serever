import jwt from "jsonwebtoken";
import { authData } from "../db/auth.js";
import { createError } from "../utils/error.js";


export const verifyUser = async (req, res, next) => {

    const token = req.header?.('Authorization')?.split(' ')[1];

    const condition = authData.response.jwttoken === token;
    
    if (condition) {
        next();
    } else {
        res.status(401).send(createError(401, "Unauthorized"));
    }
}
