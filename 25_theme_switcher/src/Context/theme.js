import { createContext , useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light", 
    // this is a initial value
    // or a default value

    darkTheme: () => {} ,
    lightTheme: () => {}
    // when some one call
    //he have two option
    //two method
})

export const ThemeProvider = ThemeContext.Provider
// we can write in a diffrent folder
// but no need we can directly use from here

 //creating a new hook
export default function useTheme(){
    return useContext(ThemeContext)
}

// just to avoid multiple export
//now useTheme() will give me all thevalue
//that is set in themecontext