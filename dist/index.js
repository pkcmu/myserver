"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Utils_1 = require("./Utils");
const app = (0, express_1.default)();
const port = 3000;
app.get('/', (req, res) => {
    res.send(Utils_1.Utils.add(1, 2) + "");
});
app.listen(port, () => {
    console.log(`Server is running ${port}`);
});
