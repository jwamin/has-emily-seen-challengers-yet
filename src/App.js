//import logo from './logo.svg';
import viewed from './constants.js';
import './App.css';

function hasSeen(viewed) {
  if(viewed){
    return (<h1 className="center-fullscreen">Yes</h1>)
  } else {
    return (<h1 className="center-fullscreen">No</h1>)
  }
}

function App() {
  const el = hasSeen(viewed);
  const classAdd = "App-header "+(viewed ? "yes" : "no");
  return (
    <div className="App">
    <header className={classAdd}>
    {el}
    </header>
    </div>
  );
}

export default App;
