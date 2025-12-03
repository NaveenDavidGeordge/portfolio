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
        instagram : "https://www.instagram.com/naveen_david_geordge",
        linkedIn : "https://www.linkedin.com/in/naveen-kumar-tamizh-murugan/",
        leetcode : "https://leetcode.com/u/9yJQQjq15Q/",
        gitHub : "https://github.com/NaveenDavidGeordge/ "
    }
        return(
            <Appcontext.Provider value={{profileURL,commonInfo}}>
                {props.children}
            </Appcontext.Provider>
        )
}

export default CommonContext