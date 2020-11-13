import React from 'react';

export default function Overlay(props:any){
    return(
        <div className={props.overlay}>
            <div className="overlay_card">
                <h2 className="overlay_title">Code:</h2>
                <p className="overlay_paragraph">Revisa tu correo</p>
                <input type="text" className="overlay_input"/>
                <button className="ovelay_button" onClick={props.showOverlay}>Confirmar</button>
            </div>
        </div>
    )
}