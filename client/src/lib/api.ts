import axios from "axios";
import toast from "react-hot-toast";




export const axiosInstance = axios.create({
 baseURL: import.meta.env.MODE === "development"? "http://localhost:3000/api":"/api",
withCredentials: true,
})

export const sendOtp = async (userId: string | undefined) => {
 try {
   const res = await axiosInstance.post("/auth/generate", {userId});
    return res.data;
  }catch (error:any) {
    console.log(error.message);
    toast.error(error.response.data.message);
 }
}

export const verifyOtp = async(userId:string | undefined,otp:Number[])=>{
  try {
    const res = await axiosInstance.post("/auth/verify", {
    userId,
    otp: otp.join(""), 
  });
    return res.data;
  
  } catch (error:any) {
    console.log(error.message);
    toast.error(error.response.data.message);

  }
}