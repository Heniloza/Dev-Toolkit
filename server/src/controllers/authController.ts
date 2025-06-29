import {Request,Response} from "express";
import USER from "../models/userModel";
import bcrypt from "bcryptjs";
import cloudinary from "../utils/cloudinary";

export const signupController = async(req:Request,res:Response)=>{
   try {
        const {username,email,password} = req.body;

        if(!username || !email || !password) {
            return res.status(400).json({
                message:"All field are required"
            })
        }

        if(password.length<=6) {
            return res.status(400).json({
                message:"Password must be at least 6 character"
            })
        }

        const existingUser = await USER.findOne({email,username})
        if(existingUser) return res.status(400).json({suucess:false,message:"User already exist"})

        const hashedPassword = await bcrypt.hash(password,12)

        const newUser = await USER.create({
            username,
            email,
            password:hashedPassword,
        })


    res.status(201).json({user:newUser,message:"New User created"})

   } catch (error) {
    res.status(500).json({
        message:"Failed to signup",
        error
    })
   }
}

export const loginController = async(req:Request,res:Response)=>{
    try {
        const {email,password} = req.body;

        if(!email || !password) {
            return res.status(400).json({
                message:"All field are required"
            })
        }

        if(password.length<=6){
            return res.status(400).json({
                message:"Password must be at least 6 characters"
            })
        }

        const user = await USER.findOne({email})
        if(!user) return res.status(404).json({message:"User not found"})

        const isMatch = await bcrypt.compare(password,user.password)
        if(!isMatch) return res.status(400).json({message:"Invalid credentials"})

        res.status(200).json({
            user,
            message:"User logged in successfully"
        })
    } catch (error) {
        res.status(500).json({
        message:"Failed to Login",
        error
    })
    }
}

export const logoutController = async (req: Request, res: Response) => {
  try {
    res.clearCookie("token");
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    res.status(500).json({
      message: "Failed to lofout"
    });
  }
};
 
export const updateProfile = async (req: Request, res: Response) => {
  try {
    const {profileImage} = req.body;
    const userId= req.user._id

    if(!profileImage || !userId){
      return res.status().json({
        message: "Image and userid are required"
      });
    }

    const uploadResponse = await cloudinary.uploader.upload(profileImage)

    const updateUser = await USER.findByIdAndUpdate(
      userId,
      {
        profileImage:uploadResponse.secure_url
      },
      {new:true}
    )

    res.status(200).json({
      message:"Profile picture updated",
      updateUser
    })

  } catch (error) {
    res.status(500).json({
      message: "Error in updating profile."
    });
  }
};

export const checkAuth = async (req: Request, res: Response) => {
  try {
    res.status(200).json(req.user)
  } catch (error) {
    res.status(500).json({
      message: "Internal server error"
    });
  }
};

