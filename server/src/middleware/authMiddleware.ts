import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import USER from "../models/userModel"

export const authMiddleware = async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const token = req.cookies.token;

    if(!token) {
        return res.status(401).json({
            message:"You are unauthorized"
        })
    }

    const decoded = jwt.verify(token,process.env.JWT_SECRET) as {id:string}

      if (!decoded) {
      return res.status(401).json({
        message: "Unauthorized - Invalid token",
      });
      }

    const user = await USER.findById(decoded.id).select("-password")

    if(!user){
        return res.status(401).json({
            message:"User not found"
        })
    }

      req.user = user
      next();
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
          message: "Something went wrong in auth middleware"
        });
        
    }
    
}