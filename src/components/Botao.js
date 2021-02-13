import ThemeContext from "../contexts/ThemeContext";
import UserContext from "../contexts/UserContext";

export default (props) =>(
    <UserContext.Consumer>
        {value=>(
            <ThemeContext.Consumer>
                {themeValue=>(
                    <button>{value.name} - {themeValue}</button>
                )}
            </ThemeContext.Consumer>
        )}
    </UserContext.Consumer>
    
);