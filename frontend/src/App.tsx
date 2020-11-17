import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";

import Header from './components/Header';
import './App.css';
import Routes from './Routes';



function App() {
  

  function hideShow(){
    const burgerButton:any=document.querySelector("#burger-menu");
    const menu:any = document.querySelector("#menu");
    if(menu.classList.contains("is-active")){
      menu.classList.remove("is-active");
    }
    else{
      menu.classList.add("is-active");
    }
  }


  return (
    <Router>
      <div className="App">
        <button className="icon-menu burger-button" id="burger-menu" onClick={hideShow}></button>
        <Header/>
        <Routes/>
      </div>
    </Router>
  );
}

export default App;
