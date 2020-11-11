import nodemailer from "nodemailer";
import config from "../config";

function send (data:any) {
let transporter: any = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: config.EMAIL,
		pass: config.EMAIL_PASSWORD
	}
	});

	let mailOptions: any = {
		from: config.EMAIL,
		to: data.email,
		subject: "You was created an account on Searching Light",
		text: `Your verification code is ${data.code}`
	}

	transporter.sendMail(mailOptions, (err: Error | null, data:any)=> {
		if (err) {
			console.log(err);
		} else {
			console.log(`email sent to ${data}`);
		}
	})
}

export default send;