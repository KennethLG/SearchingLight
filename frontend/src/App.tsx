import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";

import Header from './components/Header';
import './App.css';
import Routes from './Routes';



function App() {

  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes/>
      </div>
    </Router>
  );
}

export default App;
