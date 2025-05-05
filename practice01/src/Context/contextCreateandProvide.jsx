import { createContext, useState } from "react";


const MyContext = createContext();

const Contextprovider = ({ children })=>{
    const [pop , setPop ] = useState(false);
    
    return(
        <div>
            <MyContext.Provider value={{pop , setPop }}>
                {children}
            </MyContext.Provider>
        </div>
    )
}

export { MyContext };
export default Contextprovider;