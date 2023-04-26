import logo from './logo.svg';
import './styles/App.css';
import { Letreiro } from './components/Letreiro';
import Relogio from './components/Relogio';
import MyApp from './components/MyApp';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <Letreiro/> 
        <img src={logo} className="App-logo" alt="logo" />
        <Relogio/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

      </header>
      <hr></hr>
        <div> <MyApp/></div>
        <hr></hr>
        <div> <MyApp/></div>
        <hr></hr>
        <div> <MyApp/></div>
        <hr></hr>
        <div> <MyApp/></div>
        <hr></hr>
        <div> <MyApp/></div>
        <hr></hr>
        <div> <MyApp/></div>
        <hr></hr>
        <div> <MyApp/></div>
    </div>

  );
}

export default App;

