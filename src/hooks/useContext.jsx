import { useState, useContext, createContext } from "react";
 


export const PostContext = createContext()

export function ContextProvider({children}){
    const context = useAppContext()
    
    return( 
        <PostContext.Provider 
            value={context} >
            {children}
        </PostContext.Provider>
    )
}

export const leContext = ()=>{
    return useContext(PostContext)
}
    
export function useAppContext(){
    const [postList, setPostList] = useState([])

    
    

    return {postList, setPostList}
}