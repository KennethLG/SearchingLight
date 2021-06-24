import {Router} from "express";
import User from "../DB/User";
import sendEmail from "../services/sendEmail";
import sendEmailContact from "../services/sendEmailContact";

const router:Router = Router();

let time:string;

const createCode = ():number => {
		return parseInt((Math.floor(Math.random()*10)).toString()
		+(Math.floor(Math.random()*10)).toString()
		+(Math.floor(Math.random()*10)).toString()
		+(Math.floor(Math.random()*10)).toString());
}

async function timer(data:any) {
	await User.deleteOne({email: data.email});
	console.log("user eliminated");
}
router.get("/api/users", async (req:any, res:any) => {
	const data:object = await User.find();
	res.json(data);
});

router.post("/signin" , async (req:any, res:any) => {
	let data = req.body;
	const findUser:any = await User.findOne({email: data.email});

	const timeout: number = 120000;

	if (data.psw.length >= 8) {
		if (findUser) {
			if (findUser.status === "pending") {
				data.code = createCode();
				sendEmail(data);
				await User.updateOne({email: data.email}, {code: data.code});
				clearTimeout(time);
				time = setTimeout(() => {timer(data)}, timeout);
				console.log("codigo actualizado", data.code);
				res.json("verification code sended");
			} else if (findUser.status === "registered") {
				res.json("The user is already exists");
			}
		} else {
			data.code = createCode();
			sendEmail(data);
			
			const user = new User(data);
			time = setTimeout(() => {timer(data)}, timeout);
			await user.save();
			console.log("registrado", user);
			res.json("verification code sended");
		}	
	} else {
		res.json("Password must contain more than 8 characters");
	}
});

router.post("/verificate", async (req:any, res:any) => {
	const {code, user} = req.body;
	const verUser:any = await User.findOne({email: user.email});
	if (verUser.code == code) {
		clearTimeout(time);
		await User.updateOne({email: user.email}, {status: "registered"});
		res.json(verUser);
	} else {
		res.json("Code wrong");
	}
});

router.post("/login", async (req:any, res:any) => {
	const data = req.body;
	const findUser:any = await User.findOne({email: data.email});
	console.log(data, findUser);
	if (findUser) {
		if (data.psw == findUser.psw) {
			res.json({res: findUser});
		} else {
			res.json("Email and/or password wrongs");
		}
	} else {
		res.json("not found");
	}
});

router.post("/contact", async (req:any, res:any) => {
	const data = req.body;
	sendEmailContact(data);
	res.json("Email sent");
});

export default router;
