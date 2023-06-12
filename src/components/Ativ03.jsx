import { Link } from "react-router-dom";
import  Gallery  from "./Gallery";
import TodoList from "./TodoList";



export default function Ativ03() {
    return(
        <>
            <h1> Atividade 03 </h1>
            <Gallery />
            <TodoList />
            
            <br />
            <Link to="/"><button>Voltar</button> </Link>
        </>
    );
}