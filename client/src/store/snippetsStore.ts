import toast from "react-hot-toast";
import { create } from "zustand";
import { axiosInstance } from "../lib/api";


interface Snippet{
    _id:string;
    title:string;
    code:string;
    language:string;
    catedAt:string;
}

interface SnippetStore {
    snippets:Snippet[];
    isCreatingSnippet:boolean;
    isFetchingSnippets:boolean;
    fetchSnippets:()=> Promise<void>;
    addSnippet:(data:Omit<Snippet,"_id" | "createdAt">)=>Promise<void>;
    deleteSnippet:(id:string)=>Promise<void>;
}

export const useSnippetStore = create<SnippetStore>((set)=>({
    snippets:[],
    isCreatingSnippet:false,
    isFetchingSnippets:true,

    fetchSnippets:async()=>{
        set({isFetchingSnippets:true})
         try {
            const res = await axiosInstance.get("/snippets/fetch");
             set({ snippets: res.data });
        } catch (error:any) {
            console.log(error,"Error in fetching snippet");
        }finally{
            set({isFetchingSnippets:false})
        }
    },

    addSnippet:async(data)=>{
        set({isCreatingSnippet:true})
         try {
            const res = await axiosInstance.post("/snippets/create",data)
            set({snippets:res.data})
            toast.success("Snippet created!")
        } catch (error:any) {
            console.log(error,"Error in creating snippet");
              toast.error(error.response.data.message)
        }finally{
            set({isCreatingSnippet:false})
        }
    },

    deleteSnippet:async(id)=>{
        try {
            await axiosInstance.delete(`/snippets/delete/${id}`)
            await useSnippetStore.getState().fetchSnippets();
            toast.success("Snippet deleted successfully")
        } catch (error:any) {
            console.log(error,"Error in deleting snippet");
            toast.error(error.response.data.message)
        }
    }
}));