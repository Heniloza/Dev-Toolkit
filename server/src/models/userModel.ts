import mongoose,{Schema,Document} from "mongoose";

interface IUser extends Document{
    username:string,
    email:string,
    password:string,
    mfaEnabled:Boolean,
    profileImage?:string,
}

const userSchema : Schema<IUser> =   new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    mfaEnabled:{
        type:Boolean,
        default:false,
    },
    profileImage:{
        type:String,
    }
},{timestamps:true})

const USER = mongoose.model<IUser>("user",userSchema)
export default USER