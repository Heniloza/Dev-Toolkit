import { create } from "zustand";
import { axiosInstance } from "../lib/api";
import toast from "react-hot-toast";

interface User {
  _id: string;
  username: string;
  email: string;
  mfaEnabled: boolean;
  profileImage?: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  isLoggedin:boolean;
  isLoggingin:boolean;
  login: (data: { email: string; password: string }) => Promise<void>;
}



export const useAuthStore = create<AuthState>((set)=>({
   
    user:null,
    isAuthenticated:false,
    isLoading:false,
    isLoggingin:false,
    isLoggedin:false,

    login:async(data:any)=>{
        set({isLoggingin:true})
        try {
            const res = await axiosInstance.post("/auth/login",data)
            console.log(res);
            set({user:res.data})
            set({isLoggedin:true})
        } catch (error:any) {
            console.log(error.message);
            toast.error(error.response.data.message)
            set({isLoggedin:false})
        }finally{
            set({isLoggingin:false})
        }
    },

   
}))