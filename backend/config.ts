import dotenv from "dotenv";
dotenv.config();

export default {
	PORT: process.env.PORT,
	DB_USERNAME : process.env.DB_USERNAME,
	DB_PASSWORD : process.env.DB_PASSWORD,
	DB_NAME : process.env.DB_NAME,
	EMAIL: process.env.EMAIL,
	EMAIL_PASSWORD: process.env.EMAIL_PASSWORD,
}