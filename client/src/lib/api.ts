import axios from "axios";


export const axiosInstance = axios.create({
 baseURL: "http://localhost:3000/api",
  withCredentials: true,
})

export const sendOtp = async (userId: string | undefined) => {
  const res = await axiosInstance.post("/otp/generate", userId);
  return res.data;
};

export const verifyOtp = async(userId:string | undefined,otp:Number[])=>{
  const res = await axiosInstance.post("/auth/verify",{userId,otp})
  return res.data
}