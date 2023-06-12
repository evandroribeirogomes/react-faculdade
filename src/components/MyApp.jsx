
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

const user = {
name: 'Hedy lamarr',
imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
imageSize: 90,
};

export  function Profile() {
    return (
        <>
        <h1>{user.name}</h1>
        <img
            className="avatar"
            src={user.imageUrl}
            alt={'Photo of' + user.name}
            style={{
                width:user.imageSize,
                height: user.imageSize
            }}
            />
        </>
    );
}

export function MeuBotao() {
    function handleClick(){
        alert('you clicked me!');
    }
    return (
        <button onClick={handleClick}>
            Click me
        </button>
    );
}

