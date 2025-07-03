import {NextFunction, Request,RequestHandler,Response} from "express";
import USER from "../models/userModel.js";
import bcrypt from "bcryptjs";
import cloudinary from "../utils/cloudinary";

export const signupController:RequestHandler = async(req:Request,res:Response,next:NextFunction)=>{
   try {
        const {username,email,password} = req.body;

        if(!username || !email || !password) {
             res.status(400).json({
                message:"All field are required"
            })
        }

        if(password.length<=6) {
             res.status(400).json({
                message:"Password must be at least 6 character"
            })
        }

        const existingUser = await USER.findOne({email,username})
        if(existingUser)  res.status(400).json({suucess:false,message:"User already exist"})

        const hashedPassword = await bcrypt.hash(password,12)

        const newUser = await USER.create({
            username,
            email,
            password:hashedPassword,
        })


    res.status(201).json({user:newUser,message:"New User created"})

   } catch (error:any) {
    res.status(500).json({
        message:"Failed to signup",
        error
    })
   }
}

export const loginController:RequestHandler = async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const {email,password} = req.body;

        if(!email || !password) {
             res.status(400).json({
                message:"All field are required"
            })
            return;
        }

        if(password.length<=6){
             res.status(400).json({
                message:"Password must be at least 6 characters"
            })
            return
        }

        const user = await USER.findOne({email})
        if(!user)  {res.status(404).json({message:"User not found"})
           return}

        const isMatch = await bcrypt.compare(password,user.password)
        if(!isMatch)  {res.status(400).json({message:"Invalid credentials"}) 
          return}

        res.status(200).json({
            user,
            message:"User logged in successfully"
        })
    } catch (error:any) {
        res.status(500).json({
        message:"Failed to Login",
        error
    })
    }
}

export const logoutController:RequestHandler = async (req: Request, res: Response,next:NextFunction) => {
  try {
    res.clearCookie("token");
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error:any) {
    res.status(500).json({
      message: "Failed to lofout"
    });
  }
};
 
export const updateProfile:RequestHandler = async (req: Request, res: Response,next:NextFunction) => {
  try {
    const {profileImage} = req.body;
    const userId= req.user._id
    
    
    if(!profileImage || !userId){
       res.status(404).json({
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
      user:updateUser
    })

  } catch (error:any) {
    res.status(500).json({
      message: "Error in updating profile."
    });
  }
};

export const checkAuth:RequestHandler = async (req: Request, res: Response,next:NextFunction) => {
  try {
    const userId = req.user._id;
    const user = await USER.findById(userId); 

    if (!user) {
       res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ user }); 
  } catch (error:any) {
    res.status(500).json({ message: "Internal server error" });
  }
};

