"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userS = new mongoose_1.Schema({
    email: String,
    user: String,
    psw: String,
    code: String,
    status: String,
}, {
    versionKey: false
});
exports.default = mongoose_1.model("Users", userS);
