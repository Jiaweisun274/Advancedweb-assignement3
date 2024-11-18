import { Router } from "express";

const router: Router = Router();

type TUser = { name: string; email: string };
const users: TUser[] = [];

router.get("/hello", (req, res) => {
  res.json({ msg: "Hello world!" });
});

router.get("/echo/:id", (req, res) => {
  const id = req.params.id;
  res.json({ id });
});

router.post("/sum", (req, res) => {
  const numbers: number[] = req.body.numbers;
  const sum = numbers.reduce((a, b) => a + b, 0);
  res.json({ sum });
});

router.post("/users", (req, res) => {
  const user: TUser = req.body;
  users.push(user);
  res.json({ message: "User successfully added" });
});

router.get("/users", (req, res) => {
  res.status(201).json(users);
});

export default router;
