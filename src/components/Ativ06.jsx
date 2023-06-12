import { Link } from "react-router-dom";
import Jogodamemoria  from "./Jogodamemoria";




export default function Ativ06() {
    return(
        <>
            <h1> Atividade 06 </h1>
            <Jogodamemoria/>
            
            
            <br />
            <Link to="/"><button>Voltar</button> </Link>
        </>
    );
}