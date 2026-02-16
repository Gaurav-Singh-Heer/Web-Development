import { createContext, useContext } from "react";

export const ThemeContext=createContext({

    themeMode: "Light",        // Variable 
    darkTheme: ()=>{},         // Method
    lightTheme: ()=>{},        // Method

}) // in 08mini we did React.createContext() and we didn't filled any value inside it over there

export const ThemeProvider=ThemeContext.Provider // we can also make custom Hooks over here like below

export default function useTheme(){
    return useContext(ThemeContext);
}

/*
This is to tell that we can give variable and it's method over here only

in 08mini we gave it at UserContextProvider.jsx
as -> const[user, setUser]=React.useState(null);

user - Variable
setUser - Method

*/