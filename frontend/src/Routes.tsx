import React from 'react';
import {Route } from "react-router-dom";

import Home from './components/Home'
import Play from './components/Play';
import Register from './components/Register';


export default function Routes(){
    return(
        <>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/play">
          <Play/>
        </Route>
        <Route exact path="/register">
          <Register/>
        </Route>
        </>
    )
}