import axios from "axios";
const { createContext, useState, useEffect } = require("react");

export const AuthContext = createContext();


export const AuthContextProvider = ({children}) =>{
    const [currentUser, setcurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null);

    const login = async (inputs) =>{
        const res = await axios.post("/api/auth/login", inputs, {
            withCredentials: true
        });

        setcurrentUser(res.data)
    }

    useEffect(() =>{
        localStorage.setItem("user", JSON.stringify(currentUser));
    },[currentUser])

   return( <AuthContext.Provider  value = {{currentUser, login }}>
        {children}
        </ AuthContext.Provider>
   )
}

