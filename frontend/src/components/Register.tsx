import React, { useState } from 'react';
import axios from 'axios';
import Overlay from './Overlay';



interface State{

    email:String ,
    user :String ,
    psw : String,
    code :String ,
    status : String,
}

export default function Register(){

    const [state, setState] = useState<State>({
        email:"",
        user : "",
        psw : "",
        code : "",
        status : "pending"
        
    });
    const [overlay,setOverlay] = useState("overlayOff");

    const onChange = (ev:React.ChangeEvent<HTMLInputElement>) =>{
        setState({
            ...state,
            [ev.target.name] : ev.target.value,
        });
        // console.log(state);
    };

    const showOverlay = async () => {
        if (overlay === "overlayOff" && state.email && state.psw) {
            setOverlay("overlayOn");
        }
        else if(state.code){
            setOverlay("overlayOff");
            const response:any = await axios.post('http://localhost:4000/verificate', {
                code : state.code,
                user : state
            })
            console.log(response);
            
        }
    }

    const onSubmit = async (ev:React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        console.log(state)
        const response:any = await axios.post('http://localhost:4000/signin', state)
        console.log(response);
        showOverlay();

    }

    return(
        <>
        <section className="register">
            <div className="register_card">
                <form onSubmit={onSubmit} className="register_form">

                    <label className="register_label">Username</label>    
                    <input type="text" name="user" className="register_input" onChange={onChange}/>

                    <label className="register_label">Correo:</label>    
                    <input type="text" name="email" className="register_input" onChange={onChange}/>

                    <label className="register_label">Contraseña:</label>    
                    <input type="password" name="psw" className="register_input" onChange={onChange}/> 

                    <button className="register_button" >Registrarse</button>
                    
                    

                </form>  
            </div>
        </section>
        <Overlay overlay={overlay} showOverlay = {showOverlay} setState={setState} state = {state}/>
        </>
    )

}