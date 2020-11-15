import express from "express";
import config from "./config";
import routes from "./routes/routes";
import cors from "cors";
import "./DB/connection";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// ROUTES
app.use(routes);

app.listen(config.PORT, ()=> {
	console.log(`server started on port ${config.PORT}`);
});