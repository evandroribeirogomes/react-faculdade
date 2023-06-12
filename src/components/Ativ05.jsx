import { Link } from "react-router-dom";
import  Calculadora from "./Calculadora";




export default function Ativ05() {
    return(
        <>
            <h1> Atividade 05 </h1>
            <Calculadora/>
            
            
            <br />
            <Link to="/"><button>Voltar</button> </Link>
        </>
    );
}