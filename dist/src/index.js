"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const users = [];
// Task 1: Hello World Route
router.get("/hello", (req, res) => {
    res.json({ msg: "Hello world!" });
});
// Task 2: ID Echoing Route
router.get("/echo/:id", (req, res) => {
    const id = req.params.id;
    res.json({ id });
});
// Task 3: POST Sum Route
router.post("/sum", (req, res) => {
    const numbers = req.body.numbers;
    // Calculate the sum
    const sum = numbers.reduce((a, b) => a + b, 0);
    res.json({ sum });
});
// Task 4: Add User Route
router.post("/users", (req, res) => {
    const user = req.body;
    // Add the user to the list
    users.push(user);
    res.json({ message: "User successfully added" });
});
// Task 5: Get Users Route
router.get("/users", (req, res) => {
    res.status(201).json(users);
});
exports.default = router;
