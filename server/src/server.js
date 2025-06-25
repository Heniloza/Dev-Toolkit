"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var app = (0, express_1.default)();
var PORT = 3000;
app.get('/', function (req, res) {
    console.log("Welcome to some project");
    res.send('Hello World');
});
app.listen(PORT, function () {
    console.log("Server running on port PORT ".concat(3000));
});
