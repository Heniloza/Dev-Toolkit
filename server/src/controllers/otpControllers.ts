import {NextFunction, Request,RequestHandler,Response} from "express"
import USER from "../models/userModel.js";
import { sendOtp } from "../utils/sendOtp.js";
import OTPTOKEN from "../models/optTokenModel.js";
import jwt from "jsonwebtoken"


export const generateOtpController:RequestHandler = async (req: Request, res: Response,next:NextFunction) => {
  try {
    const {userId} = req.body

    if(!userId ) {
         res.status(400).json({
          message: "UserId is required"
        });
    }
    
    const user = await USER.findById(userId)
    if(!user){
         res.status(404).json({
          message: "User not found or email mismatch"
        });
    }

    await OTPTOKEN.deleteMany({ userId: String(userId) });

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = new Date(Date.now() +  5 * 60 * 1000) //For 5 Mins

    await OTPTOKEN.create({
        userId,
        otp,
        expiresAt,
        verified: false,
        attemptCount: 0,
    })

   
    await sendOtp(user!.email!,otp)

      res.status(200).json({
      message: "OTP sent successfully",
    });

  } catch (error:any) {
    console.log(error.message);
    res.status(500).json({
      message: "Enable to generate OTP"
    });
  }
};

export const verifyOtpController:RequestHandler = async (req: Request, res: Response,next:NextFunction) => {
  try {
    const {userId,otp} = req.body;
    const jwtSecret = process.env.JWT_SECRET as string

    if(!otp || !userId){
       res.status(400).json({
        message: "All field are required"
      });
      return;

    }

    const otpToken = await OTPTOKEN.findOne({ userId});
    if(!otpToken){
       res.status(404).json({
        message: "OTP not found or Already verified"
      });
      return
    }

    if (otpToken.expiresAt < new Date()) {
      await OTPTOKEN.deleteOne({ _id: otpToken._id });
       res.status(400).json({ message: "OTP has expired" });
       return;
    }
    
    if (otpToken.attemptCount >= 5) {
      await OTPTOKEN.deleteOne({ _id: otpToken._id });
       res.status(400).json({ message: "Too many invalid attempts. Try again later." });
       return
    }

   if (otpToken.otp !== otp) {
    otpToken.attemptCount += 1;
    await otpToken.save();
     res.status(400).json({ message: "Invalid OTP" });
     return
  }

    otpToken.verified = true;
    await otpToken.save();

    const user = await USER.findById(userId).select("-password");
      if (!user) {
         res.status(404).json({ message: "User not found" });
         return
      }
    
    const token = jwt.sign({ id: user._id }, jwtSecret, { expiresIn: "7d" });

   
      res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    }).status(200).json({
      message: "OTP verified successfully",
      user,
      success:true
    });


  } catch (error:any) {
    console.log("Error in verifying OTP",error.message);
    res.status(500).json({
      message: "Internal server error in verifying OTP"
    });
  }
};