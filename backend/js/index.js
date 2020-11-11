"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("./config"));
const routes_1 = __importDefault(require("./routes/routes"));
require("./DB/connection");
const app = express_1.default();
// SETS
app.set("PORT", config_1.default.PORT);
// MIDDLEWARES
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
// ROUTES
app.use(routes_1.default);
app.listen(app.get("PORT"), () => {
    console.log(`server started on port ${app.get("PORT")}`);
});
