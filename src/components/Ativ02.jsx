import { Link } from "react-router-dom";
import AppContador from "./AppContador";



export default function Ativ02() {
    return(
        <>
            <h1> Atividade 02 </h1>
            <AppContador />
            <br />
            <Link to="/"><button>Voltar</button></Link>
        </>
    );
}