import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";
import UserContext from "../contexts/UserContext";

export default (props) =>{
    const theme =  useContext(ThemeContext);
    const user =  useContext(UserContext);
    
    return(
        <button>{user.name} - {theme}</button>    
    );
}

