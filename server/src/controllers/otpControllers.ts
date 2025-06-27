import {Request,Response} from "express"
import USER from "../models/userModel";
import { sendOtp } from "../utils/sendOtp";
import OTPTOKEN from "../models/optTokenModel";
import jwt from "jsonwebtoken"


export const generateOtpController = async (req: Request, res: Response) => {
  try {
    const {userId} = req.body

    if(!userId ) {
        return res.status(400).json({
          message: "UserId is required"
        });
    }
    
    const user = await USER.findById(userId)
    if(!user){
        return res.status(404).json({
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

    await sendOtp(user?.email,otp)

     return res.status(200).json({
      message: "OTP sent successfully",
    });

  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: "Enable to generate OTP"
    });
  }
};

export const verifyOtpController = async (req: Request, res: Response) => {
  try {
    const {userId,otp} = req.body;

    if(!otp || !userId){
      return res.status(400).json({
        message: "All field are required"
      });
    }

    const otpToken = await OTPTOKEN.findOne({ userId});
    if(!otpToken){
      return res.status(404).json({
        message: "OTP not found or Already verified"
      });
    }

    if (otpToken.expiresAt < new Date()) {
      await OTPTOKEN.deleteOne({ _id: otpToken._id });
      return res.status(400).json({ message: "OTP has expired" });
    }
    
    if (otpToken.attemptCount >= 5) {
      await OTPTOKEN.deleteOne({ _id: otpToken._id });
      return res.status(429).json({ message: "Too many invalid attempts. Try again later." });
    }

   if (otpToken.otp !== otp) {
    otpToken.attemptCount += 1;
    await otpToken.save();
    return res.status(400).json({ message: "Invalid OTP" });
  }

    otpToken.verified = true;
    await otpToken.save();

    const user = await USER.findById(userId).select("-password");
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
    
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

   
      res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    }).status(200).json({
      message: "OTP verified successfully",
      user,
    });


  } catch (error) {
    console.log("Error in verifying OTP",error.message);
    res.status(500).json({
      message: "Internal server error in verifying OTP"
    });
  }
};