import { createContext, useState } from "react";


const MyContext = createContext();

const Contextprovider = ({ children })=>{
    const [pop , setPop ] = useState(false);
    const [sendId,setSendId] = useState(null);
    
    return(
        <div>
            <MyContext.Provider value={{pop , setPop, sendId, setSendId }}>
                {children}
            </MyContext.Provider>
        </div>
    )
}

export { MyContext };
export default Contextprovider;