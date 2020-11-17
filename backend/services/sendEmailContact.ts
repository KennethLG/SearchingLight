import nodemailer from "nodemailer";
import config from "../config";

function sendContact (data:any) {
let transporter: any = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: config.EMAIL,
		pass: config.EMAIL_PASSWORD
	}
	});

	let mailOptions: any = {
		from: config.EMAIL,
		to: "orsonleiziaga@gmail.com",
		subject: `By ${data.email}`,
		text: `${data.msg}`
	}

	transporter.sendMail(mailOptions, (err: Error | null, data:any)=> {
		if (err) {
			console.log(err);
		} else {
			console.log(`email sent to ${data}`);
		}
	})
}

export default sendContact;