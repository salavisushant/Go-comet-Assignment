import {useState} from 'react';
import {createContext} from 'react'


export const AuthContext = createContext();


export const AuthContextProvider = ({children}) =>{
    const [isTog,setIsTog]= useState(false);

    const handleToggleAuth = () =>{
        setIsTog(!isTog);
    };

   
    const value ={isTog,handleToggleAuth};

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}