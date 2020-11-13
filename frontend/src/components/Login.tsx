import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Login(){

    const [state, setState] = useState<Object>({
        email : "",
        psw : ""
    });

    const onChange = (ev:React.ChangeEvent<HTMLInputElement>) =>{
        setState({
            ...state,
            [ev.target.name] : ev.target.value,
        });
    }

    const onSubmit = async (ev:any) => {
        ev.preventDefault();
        const response:any = await axios.post('http://localhost:4000/login', state);
        console.log(response);
    }
        

    return(
        <section className="register">
            <div className="register_card">
                <form onSubmit={onSubmit} className="register_form">

                    <label className="register_label">Correo:</label>    
                    <input type="text" name="email" className="register_input" onChange={onChange}/>
                    <label className="register_label">Contraseña:</label>    
                    <input type="password" name="psw" className="register_input" onChange={onChange}/>

                    <p className="register_paragraph">¿Aun no tienes cuenta?</p>
                    <input type="submit" value="Ingresar"  className="login_button"/>

                    <Link to="/register" className="link_buttonContainer">
                        <button className="login_button">Registrar</button>
                    </Link>
                    

                </form>  
            </div>
        </section>
    )
}