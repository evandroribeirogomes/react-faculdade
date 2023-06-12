
import { Link } from "react-router-dom";
import  Letreiro  from './Letreiro';
import  Relogio  from './Relogio';


export default function Ativ01() {
    return(
        <>
            <h1> Atividade 01 </h1>
            <Letreiro />
            <Relogio />
            <br />
            <Link to="/"><button>Voltar</button> </Link>
        </>
    );
}

