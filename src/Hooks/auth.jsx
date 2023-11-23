/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState, useContext } from "react";
import { api } from "../Services/api"

const AuthContext = createContext({})

function AuthProvider({ children }){
    
    const [data, setData] = useState("")

    async function signIn({ email, password }){
        try{
            const response = await api.post("/sessions", { email, password })
            const { user, token } = response.data

            localStorage.setItem("@rocketmovies:user", JSON.stringify(user))
            localStorage.setItem("@rocketmovies:token", token)
            
            api.defaults.headers.common["Authorization"] = `Bearer ${token}`

            setData({ user, token })

            console.log(user, token)

        } catch(error) {
            if(error.response){
                alert(error.response.data.message)
            } else {
                alert("Não foi possível iniciar a sessão.")
            }
        }
    }
    function signOut(){
        localStorage.removeItem("@rocketmovies:user")
        localStorage.removeItem("@rocketmovies:token")

        setData({})
    }
    return(
        <AuthContext.Provider value={{ signIn, signOut, user:data.user }}>
            { children }
        </AuthContext.Provider>
    )
}
function useAuth(){
    const context = useContext(AuthContext)

    return context
}

export { AuthProvider, useAuth }