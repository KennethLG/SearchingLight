import mongoose from "mongoose";
import config from "../config"

(async ()=> {
	const db = await mongoose.connect(`mongodb+srv://${config.DB_USERNAME}:${config.DB_PASSWORD}@cluster0.tgrpo.mongodb.net/${config.DB_NAME}?retryWrites=true&w=majority`, {
		useCreateIndex: true,
		useNewUrlParser: true,
		useUnifiedTopology: true
	});
	console.log(`database connected to ${db.connection.name}`);
})()

