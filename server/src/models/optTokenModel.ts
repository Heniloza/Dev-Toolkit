import mongoose,{Schema,Document, mongo} from "mongoose";

interface IOtpToken extends Document{
    userId:mongoose.Types.ObjectId,
    otp:string,
    expiresAt:Date,
    verified:Boolean,
    attemptCount:number
}

const otpTokenSchema : Schema<IOtpToken> = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true,
    },
    otp:{
        type:String,
        required:true,
    },
    expiresAt:{
        type:Date,
        required:true,
    },
    verified:{
        type:Boolean,      
        default:false,
    },
    attemptCount:{
        type:Number,
        default:0
    }
},{timestamps:true})

const OTPTOKEN = mongoose.model<IOtpToken>("otpToken",otpTokenSchema)

export default OTPTOKEN