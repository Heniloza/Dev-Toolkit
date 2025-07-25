import { create } from "zustand";
import { axiosInstance } from "../lib/api";
import toast from "react-hot-toast";

interface User {
  _id: string;
  username: string;
  email: string;
  mfaEnabled: boolean;
  profileImage?: string;
  createdAt: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  isLoggedin:boolean;
  isLoggingin:boolean;
  isSiggingin:boolean;
  isCheckingAuth:boolean,
  isUpdatinProfile:boolean,

  
  setUser: (user: User | null) => void;
  setIsAuthenticated: (status: boolean) => void;
  setIsLoggedin:(status:boolean) => void;
  login: (data: { email: string; password: string }) => Promise<void>;
  checkAuth:()=>void;
  signup:(data:{username:string,email:string,password:string})=>Promise<void>
  logout:()=>Promise<void>
  updateProfile:(data:{profileImage:string})=>Promise<void>
}



export const useAuthStore = create<AuthState>((set)=>({
   
    user:null,
    isAuthenticated:false,
    isLoading:false,
    isLoggingin:false,
    isLoggedin:false,
    isSiggingin:false,
    isCheckingAuth:true,
    isUpdatinProfile:false,

    setUser: (user) => set({ user }),
    setIsAuthenticated: (status) => set({ isAuthenticated: status }),
    setIsLoggedin:(status:boolean) => set({isLoggedin:status}),

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
  },

  logout:async()=>{
    try {
       await axiosInstance.post("/auth/logout")
       set({user:null})
       set({isAuthenticated:false})
       set({isLoggedin:false})
       toast.success("Logged out successfully.")
    } catch (error:any) {
      console.log(error.message);
      toast.error(error.response.data.message)
    }
  },

  updateProfile:async(data:any)=>{
    set({isUpdatinProfile:true})
    try {
      const res = await axiosInstance.post("/auth/update-profile",data)
      set({user:res?.data.user})
      toast.success("Profile uodated successfully.")
    } catch (error:any) {
      console.log(error,"Error in updating profile");
      toast.error(error.response.data.message)
    }finally{
      set({isUpdatinProfile:false})
    }
  }

}))