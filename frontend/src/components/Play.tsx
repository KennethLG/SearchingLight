import React from 'react';
import {Redirect} from 'react-router-dom';


export default function Play(){
    return(
        <div>
            <Redirect to="/login"></Redirect>
        </div>
    )
}