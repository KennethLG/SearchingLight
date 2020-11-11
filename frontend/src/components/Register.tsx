import React from 'react';

export default function Register(){

    const onSubmit = () => {
        
    }

    return(
        <section className="register">
            <div className="register_card">
                <form onSubmit={onSubmit} className="register_form">

                    <label htmlFor="email" className="register_label">Iniciar Sesion:</label>    
                    <input type="text" name="email" className="register_input"/>
                    <label htmlFor="pwd" className="register_label">Contraseña:</label>    
                    <input type="text" name="pwd" className="register_input"/>

                    <p className="register_paragraph">¿Aun no tienes cuenta?</p>
                    <input type="submit" value="Ingresar"  className="register_button"/>
                    <input type="submit" value="Registrar" className="register_button"/>
                    

                </form>  
            </div>
        </section>
    )
}