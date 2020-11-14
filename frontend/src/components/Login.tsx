import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import { stat } from 'fs';

interface Account {
    email: String;
    psw : String;
}

interface State {
    account: Account;
    msg : String;
}

export default function Login(props: any){

    const [state, setState] = useState<State>({
        account: {
            email : "",
            psw : "",
        },
        msg : ""
    });
    const [redirect, setRedirect] = useState(<div></div>);

    const onChange = (ev:React.ChangeEvent<HTMLInputElement>) =>{
        setState({
            ...state,
            account: {
                ...state.account,
                [ev.target.name]: ev.target.value
            }
        });
    }


    const onSubmit = async (ev:any) => {
        ev.preventDefault();
        if (state.account.email !== "" && state.account.psw !== "") {     

            const response:any = await axios.post('http://localhost:4000/login', state.account);
            if (typeof(response.data) === "object") {
                props.Pattern.setState({
                    user : response.data.res,
                    profile: {
                        logged : true
                    }
                });
                setRedirect(<Redirect to="/play"></Redirect>);

            } else {
                setState({...state, msg : response.data}); 
            }
        }
        
        else{
            setState({...state, msg : "You must to complete the camps email and password"}); 
        }
    }
    

        

    return(
        <>
        <section className="register">
            <div className="register_card">
                <form onSubmit={onSubmit} className="register_form">

                    <label className="register_label">Correo:</label>    
                    <input type="email" name="email" className="register_input" onChange={onChange}/>
                    <label className="register_label">Contraseña:</label>    
                    <input type="password" name="psw" className="register_input" onChange={onChange}/>

                    <p className="register_paragraph">¿Aun no tienes cuenta?</p>
                    <input type="submit" value="Ingresar"  className="login_button"/>

                    <Link to="/register" className="link_buttonContainer">
                        <button className="login_button">Registrar</button>
                    </Link>

                    <p className="register_label alert">{state.msg}</p>
                </form>
            </div>
        </section>
        {redirect}
        </>
    )
}