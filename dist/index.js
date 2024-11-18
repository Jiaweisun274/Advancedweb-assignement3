"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const PORT = 3000;
const users = [];
// Middleware
app.use(express_1.default.json()); // Parse JSON in request bodies
app.use(express_1.default.static(path_1.default.join(__dirname, "../public"))); // Serve static files
// Task 1: Hello World Route
app.get("/hello", (req, res) => {
    res.json({ msg: "Hello world!" });
});
// Task 2: ID Echoing Route
app.get("/echo/:id", (req, res) => {
    const id = req.params.id;
    res.json({ id });
});
// Task 3: POST Sum Route
app.post("/sum", (req, res) => {
    const numbers = req.body.numbers;
    // Calculate the sum
    const sum = numbers.reduce((a, b) => a + b, 0);
    res.json({ sum });
});
// Task 4: Add User Route
app.post("/users", (req, res) => {
    const user = req.body;
    // Add the user to the list
    users.push(user);
    res.json({ message: "User successfully added" });
});
// Task 5: Get Users Route
app.get("/users", (req, res) => {
    res.status(201).json(users);
});
// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
