import { Link } from "react-router-dom";
import  Tollbar from "./Toolbar";




export default function Ativ04() {
    return(
        <>
            <h1> Atividade 04 </h1>
            <Tollbar/>
            
            
            <br />
            <Link to="/"><button>Voltar</button> </Link>
        </>
    );
}