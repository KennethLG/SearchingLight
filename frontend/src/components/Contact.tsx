import React, {useState} from "react";
import {Redirect} from "react-router-dom";
import axios from "axios";

interface State {
	email: String;
	msg: String
}

const Contact = (props: any)=> {

	const [state, setState] = useState<State>({email: "", msg: ""});

	const submit = async (e: any) => {
		e.preventDefault();
		const response: any = await axios.post("http://localhost:4000/contact", state);
		console.log(response);
	}

	const onChange = (e:any) => {
		setState({...state, [e.target.name] : e.target.value});
	}

	return(
		<div className="aboutContain">
			<div className = "aboutContainer">
				<div className = "aboutText">
					Here you can ask us anything,
					you can ask us what you want about the video game, 
					about the page, about us, who we are, what you want.
				</div><br/><br/><hr/><br/>
				<form onSubmit={submit}>
					<div style={{width: "80%", margin: "auto"}}>
						<input type="email" onChange = {onChange} name="email" className="emailContact" placeholder="Write your Email"/><br/><br/><br/>
						<textarea onChange={onChange} name="msg" className="messageContact" placeholder="Write your message"/>
						<div style={{width: "40%", margin: "auto", padding: "32px"}}><button type="submit" className="buttonContact">Send message</button></div>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Contact;