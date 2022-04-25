import React, {useState} from 'react';
import logo from './logo.svg';
import Horoscope from "./Horoscope";
import ReactDOM from "react-dom";
import './App.css';
import "react-awesome-button/dist/styles.css"



function App() {
  return (
    <div className="App">
      {/*<header className="App-header">*/}
        <div>
          <Horoscope/>
        </div>
      {/*  <a*/}
      {/*    className="App-link"*/}
      {/*    href="https://reactjs.org"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*  </a>*/}
      {/*</header>*/}
    </div>

  );
}

export default App;
