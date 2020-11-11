import {Schema, model} from "mongoose"

const userS = new Schema({
	email: String,
	user : String,
	psw : String,
	code: String,
	status: String,
}, {
	versionKey: false
})

export default model("Users", userS);