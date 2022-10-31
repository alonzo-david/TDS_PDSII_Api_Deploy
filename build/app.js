"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("./routes");
const PORT = process.env.PORT || 3001;
const app = (0, express_1.default)();
// app.use(cors({
//     origin:['http://localhost:5000']
// }))
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(routes_1.router);
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Grupo 6 Rest API." });
});
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
