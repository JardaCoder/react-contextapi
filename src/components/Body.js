import { useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext';
import Botao from './Botao';

export default (props) => {

    const theme = useContext(ThemeContext);

    const handleButton = () => {
        props.setUsername('Jardel');
    }

    return (
        <article className={"box theme-"+theme}>
            <Botao />
            <button onClick={handleButton}>Trocar para Jardel</button>
        </article>
    );
}