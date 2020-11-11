"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const User_1 = __importDefault(require("../DB/User"));
const sendEmail_1 = __importDefault(require("../services/sendEmail"));
const router = express_1.Router();
let time;
const createCode = () => {
    return parseInt((Math.floor(Math.random() * 10)).toString()
        + (Math.floor(Math.random() * 10)).toString()
        + (Math.floor(Math.random() * 10)).toString()
        + (Math.floor(Math.random() * 10)).toString());
};
function timer(data) {
    return __awaiter(this, void 0, void 0, function* () {
        yield User_1.default.deleteOne({ email: data.email });
        console.log("user eliminated");
    });
}
router.get("/api/users", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield User_1.default.find();
    res.json(data);
}));
router.post("/signin", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let data = req.body;
    const findUser = yield User_1.default.findOne({ email: data.email });
    const timeout = 30000;
    if (findUser) {
        if (findUser.status === "pending") {
            data.code = createCode();
            sendEmail_1.default(data);
            yield User_1.default.updateOne({ email: data.email }, { code: data.code });
            clearTimeout(time);
            time = setTimeout(() => { timer(data); }, timeout);
            console.log("codigo actualizado", data.code);
        }
        else if (findUser.status === "registered") {
            res.json("registered");
        }
    }
    else {
        data.code = createCode();
        sendEmail_1.default(data);
        const user = new User_1.default(data);
        time = setTimeout(() => { timer(data); }, timeout);
        yield user.save();
        console.log("registrado", user);
        res.json("sended");
    }
}));
router.post("/verificate", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { code, user } = req.body;
    const verUser = yield User_1.default.findOne({ email: user.email });
    if (verUser.code == code) {
        clearTimeout(time);
        yield User_1.default.updateOne({ email: user.email }, { status: "registered" });
        res.json(verUser);
    }
}));
router.post("/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body.state;
    const findUser = yield User_1.default.findOne({ email: data.email });
    console.log(data, findUser);
    if (findUser) {
        if (data.psw == findUser.psw) {
            res.json({ res: findUser });
        }
        else {
            res.json({ res: "error" });
        }
    }
    else {
        res.json({ res: "not found" });
    }
}));
exports.default = router;
