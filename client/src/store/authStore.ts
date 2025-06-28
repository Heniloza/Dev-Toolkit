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
  isSiggingin:boolean;
  isCheckingAuth:boolean,

  
  setUser: (user: User | null) => void;
  setIsAuthenticated: (status: boolean) => void;
  login: (data: { email: string; password: string }) => Promise<void>;
  checkAuth:()=>void;
  signup:(data:{username:string,email:string,password:string})=>Promise<void>
}



export const useAuthStore = create<AuthState>((set)=>({
   
    user:null,
    isAuthenticated:false,
    isLoading:false,
    isLoggingin:false,
    isLoggedin:false,
    isSiggingin:false,
    isCheckingAuth:true,
    setUser: (user) => set({ user }),
    setIsAuthenticated: (status) => set({ isAuthenticated: status }),

    login:async(data:any)=>{
        set({isLoggingin:true})
        try {
            const res = await axiosInstance.post("/auth/login",data)
            set({user:res.data.user})
            set({isLoggedin:true})
        } catch (error:any) {
            console.log(error.message);
            toast.error(error.response.data.message)
            set({isLoggedin:false})
        }finally{
            set({isLoggingin:false})
        }
    },

    checkAuth: async () => {
    try {
      const res = await axiosInstance.get("/auth/check");
      set({ user: res.data.user, isAuthenticated: true });
    } catch (error) {
      set({ user: null, isAuthenticated: false });
    }finally{
      set({isCheckingAuth:false})
    }
  },

  signup:async(data:any)=>{
    set({isSiggingin:true})
    try {
      const res = await axiosInstance.post("/auth/signup",data)
      set({user:res.data.user})
      set({isLoggedin:true})
      console.log(res.data);
      
    } catch (error:any) {
      console.log(error.message);
      toast.error(error.response.data.message)
    }finally{
      set({isSiggingin:false})
    }
  }


   
}))