import Botao from './Botao';
import ThemeContext from '../contexts/ThemeContext';
import { useContext } from 'react';




export default () =>{
    const theme = useContext(ThemeContext);
    return(
        <aside className={"box theme-"+theme} >
            <Botao />
        </aside>
    );
}

