import React from 'react';
import { Link  } from 'react-router-dom';
import '../styles/appcontador.css';
import '../styles/home.css';
import '../styles/calculadora.css'; 
import '../styles/jogodamemoria.css' 

const Home = () => {
    return(
        <div class="container">
            <div><h1>Menu</h1></div>
            <nav>
                <ul class="menu">
                    <li>
                       <Link to="/Ativ01">Atividade 01</Link>
                    </li>
                    <li>
                       <Link to="/Ativ02">Atividade 02</Link>
                    </li>
                    <li>
                       <Link to="/Ativ03">Atividade 03</Link>
                    </li>
                    <li>
                       <Link to="/Ativ04">Atividade 04</Link>
                    </li>
                    <li>
                       <Link to="/Ativ05">Atividade 05</Link>
                    </li>
                    <li>
                       <Link to="/Ativ06">Atividade 06</Link>
                    </li>
                
                </ul>
            </nav>
        </div>
    );
}
export default Home;