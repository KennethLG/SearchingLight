import React, { useState } from 'react';
import {Redirect} from "react-router-dom";
import axios from 'axios';
import Overlay from './Overlay';

interface Account{
    email:String ,
    user :String ,
    psw : String,
    code :String ,
    status : String,
}

interface State {
    account: Account;
    msg : String
}

export default function Register(props: any){

    const [state, setState] = useState<State>({
        account: {
            email:"",
            user : "",
            psw : "",
            code : "",
            status : "pending",
        },
        msg : ""
    });
    const [overlay,setOverlay] = useState("overlayOff");
    const [redirect, setRedirect] = useState(<div></div>);

    const onChange = (ev:React.ChangeEvent<HTMLInputElement>) =>{
        setState({
            ...state,
            account : {
                ...state.account,
                [ev.target.name] : ev.target.value
            }
        });
        // console.log(state);
    };

    const showOverlay = async () => {
        if (overlay === "overlayOff") {
            setOverlay("overlayOn");
        } else if (state.account.code !== ""){
            setOverlay("overlayOff");
            const response:any = await axios.post('http://localhost:4000/verificate', {
                code : state.account.code,
                user : state.account
            });
            if (typeof(response.data) === "object") {
                props.Pattern.setState({
                    user : response.data,
                    profile: {
                        logged : true
                    }
                });
                setRedirect(<Redirect to="/play"></Redirect>);
            } else {
                setState({...state, msg: response.data});
            }
            console.log(response);

        } else {
            alert("Please, write the verification code");
        }
    }

    const onSubmit = async (ev:React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        if (state.account.email !== "" && state.account.user !== "" && state.account.psw !== "") {
            console.log(state)
            const response:any = await axios.post('http://localhost:4000/signin', state.account)
            setState({...state, msg: response.data});
            if (response.data === "verification code sended") showOverlay();
            console.log(state, response.data);
        } else {
            alert("Please, complete all the form");
        }
    }

    return(
        <>
        <section className="register">
            <div className="register_card">
                <form onSubmit={onSubmit} className="register_form">

                    <label className="register_label">Username</label>    
                    <input type="text" name="user" className="register_input" onChange={onChange}/>

                    <label className="register_label">Email</label>    
                    <input type="email" name="email" className="register_input" onChange={onChange}/>

                    <label className="register_label">Password</label>    
                    <input type="password" name="psw" className="register_input" onChange={onChange}/> 

                    <button className="register_button">Sign in</button>

                    <p className="register_label alert">{state.msg}</p>
                    

                </form>  
            </div>
        </section>
        <Overlay overlay={overlay} showOverlay = {showOverlay} setState={setState} state={state}/>
        {redirect}
        </>
    )

}