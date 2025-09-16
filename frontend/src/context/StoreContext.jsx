import { createContext } from "react";
import { food_list } from "../assets/assets";   

export const StoreContext = createContext(null);

const StoreContextProvider = (props)=>{

    const  contextVlalue = {
        food_list
    }
return(
    <StoreContext.Provider value={contextVlalue}>
        {props.chilren}
    </StoreContext.Provider>
    )

}

export default StoreContextProvider;