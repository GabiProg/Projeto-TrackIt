import React, { createContext, useState } from 'react';

export const AuthContext = createContext({});

function AuthProvider({children}){

    const [token, setToken] = useState(null);

    function getToken(token){
        setToken(token);
    }

    return (
        <AuthContext.Provider value={{getToken, token}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;


















/* 
const [token, setToken] = useState(null);

function getToken(token){
    setToken(token)
} */