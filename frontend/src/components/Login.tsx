import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login(){

    const [state, setState] = useState({

    });

    const onSubmit = (ev:any) => {
        ev.preventDefault();
    }
        

    return(
        <section className="register">
            <div className="register_card">
                <form onSubmit={onSubmit} className="register_form">

                    <label htmlFor="email" className="register_label">Correo:</label>    
                    <input type="text" name="email" className="register_input"/>
                    <label htmlFor="pwd" className="register_label">Contraseña:</label>    
                    <input type="password" name="pwd" className="register_input"/>

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