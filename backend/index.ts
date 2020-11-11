import express from "express";
import config from "./config";
import routes from "./routes/routes";

import "./DB/connection";

const app = express();

// SETS
app.set("PORT", config.PORT);

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// ROUTES
app.use(routes);

app.listen(app.get("PORT"), ()=> {
	console.log(`server started on port ${app.get("PORT")}`);
});