import { useState } from 'react';
import './App.css';

import Header from './components/Header';
import Menu from './components/Menu';
import Body from './components/Body';

import ThemeContext from './contexts/ThemeContext';
import UserContext from './contexts/UserContext'

const App = () => {
    const [userName, setUserName] = useState('jardelão');
    const [userEmail, setUserEmail] = useState('jardacoder@gmail.com');
    
    return (
     <ThemeContext.Provider value="dark">
         <UserContext.Provider value={{name:userName, email:userEmail}}>
            <div className="container">
                <ThemeContext.Consumer >
                    {(value) =>{
                        return <div>Tema: {value}</div>
                    }}
                </ThemeContext.Consumer>
                <Header/>
                <section>
                    <Menu />
                    <Body setUsername={setUserName} />
                </section>
            </div>
        </UserContext.Provider>
     </ThemeContext.Provider>
    );
}

export default App;