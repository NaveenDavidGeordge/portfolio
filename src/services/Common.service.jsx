// import { Children } from "react";
import { createContext } from "react";

export const Appcontext = createContext();

const CommonContext = (props)=>{
    const commonInfo = {
        name : "Naveen Kumar",
        phone : 9952201603,
        mail: "naveenkumar592.t@gmail.com",
    };
    const profileURL = {
        instagram : "instagram",
        linkedIn : "linkedIN url",
        leetcode : " leetcode url ",
        gitHub : " github code "
    }
        return(
            <Appcontext.Provider value={{profileURL,commonInfo}}>
                {props.children}
            </Appcontext.Provider>
        )
}
export default CommonContext