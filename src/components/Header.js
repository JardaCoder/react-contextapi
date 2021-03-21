import Botao from './Botao';
import { useStateValue } from '../contexts/StateContext';

export default () => {
    const [state, dispatch] = useStateValue();

    const sendNotification = () =>{
       
            new Notification('Olá', {body: 'Seja bem vindo lindão'})
  
    }
    
    return (
        <header className={`box theme-${state.theme}`}>
            {state.theme === 'light' &&
                <button onClick={()=>dispatch({type:'setTheme', theme: 'dark'})}>Dark</button>
            }
            {state.theme === 'dark' &&
                <button onClick={()=>dispatch({type:'setTheme', theme: 'light'})}>Light</button>
            }
              <button onClick={()=>sendNotification}>Notify</button>
            
        </header>
    );
};