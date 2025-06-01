import API_CONFIG from "@/config/api.config";
import { createContext, useContext, useEffect, useState } from "react";
import useQuery from "../hooks/useQuery";


const AuthContext = createContext({
    isAuthenticated: false,
    setIsAuthenticated: () => {},
});

const AuthContextProvider = ({children}) => {

    const [authenticatedUser, setAuthenticatedUser] = useState({
        user: null,
        isAuthenticated: false,
    });

    const {data, isLoading} = useQuery({
        url: API_CONFIG.USER.PROFILE,
    })

    useEffect(() => {
        setAuthenticatedUser({
            isAuthenticated: true,
            user: data
        })
    }, [data]);

    if(isLoading) { return <p>Loading....</p>; }


    return (
    <AuthContext value={{
        authenticatedUser,
        setAuthenticatedUser
    }}>
        {children}
    </AuthContext>   
)}

const useAuthContext = ()=> {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuthContext must be used within an AuthContextProvider");
    }
    return context;
}

export {useAuthContext};
export default AuthContextProvider;