function Button({onClick, children})
{
    return(
        <button onClick= { e => {
            e.stopPropagation();
            onClick();
            }}>
            {children}
        </button>
    );
}

function PlayButton({movieName})
{
    function handlePlayClick(){
        alert('Playing ${movieName}!');
    }

    return(
        <Button onClick={handlePlayClick}>
            Play"{movieName}"
        </Button>
    );
}

function UploadButton(){
    return(
        <Button onClick={() => alert('Uploading!')}>
            Upload Image
        </Button>
    );
}

function AlertButton({message, children})
{
    return(
        <button onClick={() => alert(message)}>
            {children}
        </button>
    );
}

export default function App()
{
    return(
        <Toolbar onSumit={e=>{
            e.preventDefaut();
            alert('Submitting!');
        }}
            onPlayMovie={() => alert('Playing!')}
            onUploadImage={() => alert('Uploading!')}
        />
    );
}

//  export default 

 function Toolbar({onPlayMovie , onUploadImage})
{
    return(
        <div className="Toolbar" onClick={() =>{
            alert('You clicked on the toolbar!');
        }}>
            {/* <AlertButton message="Playing!">
                Play Movie
            </AlertButton>

            <AlertButton message="Uploading!">
                Upload Image
            </AlertButton>

            <PlayButton movieName="Kiki´s Delivery Service"/>
            <UploadButton/> */}

            {/* <Button onClick={onPlayMovie}>
                Play Movie
            </Button>
            <Button onClick={onUploadImage}>
                Upload Image
            </Button> */}

            <button onClick={() => alert('Playing!')}>
                Play Movie
            </button>
            <br></br>
            <button onClick={() => alert('Uploading!')}>
                Upload Image
            </button>
        </div>
    );
}

