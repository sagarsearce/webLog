import React,{createContext, useContext, useState} from 'react'

const authContext = createContext<undefined>(null)

 function AuthProvider ({children}) {
    const [user, setUser] = useState(null)

    const changeUser=(user)=>{
        return setUser(user)
    }
    return <authContext.Provider  value={user}>{children}</authContext.Provider>
}

const useAuth = () =>{
    return useContext(authContext);
}


export {AuthProvider , useAuth}