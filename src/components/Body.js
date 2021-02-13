import ThemeContext from '../contexts/ThemeContext';
import Botao from './Botao';

export default (props) => {
    const handleButton = () => {
        props.setUsername('Jardel');
    }

    return (
    <ThemeContext.Consumer>
        {value =>(
            <article className={"box theme-"+value}>
                <Botao />

                <button onClick={handleButton}>Trocar para Jardel</button>
            </article>
        )}
    </ThemeContext.Consumer>
        
    );
}