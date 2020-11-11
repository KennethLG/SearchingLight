"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
const config_1 = __importDefault(require("../config"));
function send(data) {
    let transporter = nodemailer_1.default.createTransport({
        service: "gmail",
        auth: {
            user: config_1.default.EMAIL,
            pass: config_1.default.EMAIL_PASSWORD
        }
    });
    let mailOptions = {
        from: config_1.default.EMAIL,
        to: data.email,
        subject: "You was created an account on Searching Light",
        text: `Your verification code is ${data.code}`
    };
    transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(`email sent to ${data}`);
        }
    });
}
exports.default = send;
