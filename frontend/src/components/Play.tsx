import React from 'react';
import {Redirect} from 'react-router-dom';
import PlayContent from './PlayContent';


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
        <div className="play_container">
            {play()}
            <PlayContent/>
        </div>
    )
}