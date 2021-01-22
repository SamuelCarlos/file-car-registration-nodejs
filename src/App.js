import "./App.css";
import Excedent from "./body.js";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a className="link" href="/">
          <h1>Car Tag Registrator</h1>
        </a>
      </header>
      <Excedent />
      <footer className="App-footer">
        <h6>
          <a href="https://github.com/SamuelCarlos">By Samuel Carlos</a>
        </h6>
      </footer>
    </div>
  );
}

export default App;
