"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
//Config
var port = process.env.SERVER_PORT;
var app = (0, express_1.default)();
app.listen(port, function () {
    console.log("[server]: Server is running at htpp://localhost:".concat(port));
});
//# sourceMappingURL=app.js.map