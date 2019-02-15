"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var server = express_1["default"]();
server.get('/', function (req, res) { return res.send('Hello World!'); });
server.listen(3000, function () { return console.log('Composite running on localhost:3000'); });
