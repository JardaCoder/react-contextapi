import { useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext';
import Botao from './Botao';



export default () =>{

    const theme = useContext(ThemeContext);

  return  (
        <header className={"box theme-" + theme}>
            <Botao />
        </header>
    );
}
