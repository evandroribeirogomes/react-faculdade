
function MyButton(){
    return (
        <button> Eu sou um botão </button>
    );
}

export default function MyApp(){
    return(
        <div>
            <h1> Bem vindo ao meu app</h1>
            <MyButton/>
        </div>
    );
}

function AboutPage() {
    return(
        <>
         <h1> About</h1>
         <p>Hello there.<br/> How do you do?</p>
        </>
    );
}


