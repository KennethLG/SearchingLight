import React from 'react';

export default function Overlay(props:any){
    const onChange = (ev:React.ChangeEvent<HTMLInputElement>) => {
        props.setState({
            ...props.state,
            account : {
                ...props.state.account,
                code : ev.target.value
            }
        });
        console.log(props.state, props.setState);
    }

    return(
        <div className={props.overlay}>
            <div className="overlay_card">
                <h2 className="overlay_title">Code:</h2>
                <p className="overlay_paragraph">Check your email<br/>verification code expires in 2 minutes</p>
                <input type="text" className="overlay_input" onChange={onChange}/>
                <button className="ovelay_button" onClick={props.showOverlay}>Confirm</button>
            </div>
        </div>
    )
}
