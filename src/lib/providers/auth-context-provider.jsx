import { createContext } from "react";


const AuthContext = createContext({
    authenticatedUser: null,
    isAuthenticated: false,
});

const AuthContextProvider = ({children}) => {

    


    return (
    <AuthContext>
        {children}
    </AuthContext>   
)}