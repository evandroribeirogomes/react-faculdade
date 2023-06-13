import React from "react";

function Button({ onClick, children }) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      {children}
    </button>
  );
}
<br></br>
function PlayButton({ movieName }) {
  function handleClick() {
    alert(`Playing ${movieName}!`);
  }
<br></br>
  return (
    <Button onClick={handleClick}>
      Play "{movieName}"
    </Button> 
  ); 
}
<br></br>
function UploadButton() {
    <br></br>
  return (
    
    <Button onClick={() => alert('Uploading!')}>
      Upload Image
    </Button> 
  );
}
<br></br>
function Toolbar() {
  return (
    <div className="Toolbar" onClick={() => {
      alert('You clicked on the toolbar');
    }}><br></br>
      <Button onClick={() => alert('Playing!')}>
        Play Movie
      </Button> <br></br>
      <Button onClick={() => alert('Uploading!')}>
        Upload Image
      </Button> <br></br>
    </div>
  );
}

function Signup() {
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      alert('Submitting!');
    }}>
      <input />
      <button>Send</button>
    </form>
  );
}

export default function App() {
  return (
    <>
      
      <PlayButton movieName="Movie Name" />
      <UploadButton />
      <Toolbar />
      <Signup />
    </>
  );
}

