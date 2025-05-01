import { Children, createContext, useState } from "react";

export const IContext = createContext();

export const IContextProvider = ({children}) =>{
    const [them,setThem] = useState("light");

    const [value,setValue] = useState(0);

    const toggleThem = ()=>{
        setThem(them === "light"?"dark": "light");
    };

    return(
        <IContext.Provider value={{them,toggleThem,value}}>
            {children}
        </IContext.Provider>
    );
};