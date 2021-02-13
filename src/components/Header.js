import ThemeContext from '../contexts/ThemeContext';
import Botao from './Botao';



export default () =>(
    <ThemeContext.Consumer>
        {value =>(
            <header className={"box theme-" + value}>
                <Botao />
            </header>
        )}

    </ThemeContext.Consumer>
);