import React from 'react';
import {Redirect} from 'react-router-dom';


export default function Play(props:any){

    const play:any = () => {

      
        if (props.Pattern.state.profile.logged) {
            return(
                <div></div>
            )
        }
        else{
            return(
                <Redirect to="/login"></Redirect>
            )
        }
    }
    
    return(
        <div>
            {play()}
        </div>
    )
}