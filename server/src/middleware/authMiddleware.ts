import { Request, Response, NextFunction, RequestHandler } from "express";
import jwt from "jsonwebtoken";
import USER from "../models/userModel.js"

export const authMiddleware:RequestHandler = async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const token = req.cookies.token;

    if(!token) {
         res.status(401).json({
            message:"You are unauthorized"
        })
    }

    const decoded = jwt.verify(token,process.env.JWT_SECRET as string) as {id:string}

      if (!decoded) {
       res.status(401).json({
        message: "Unauthorized - Invalid token",
      });
      }

    const user = await USER.findById(decoded.id).select("-password")

    if(!user){
         res.status(401).json({
            message:"User not found"
        })
    }

      req.user = user
      next();
    } catch (error:any) {
        console.log(error.message);
         res.status(500).json({
          message: "Something went wrong in auth middleware"
        });
        
    }
    
}