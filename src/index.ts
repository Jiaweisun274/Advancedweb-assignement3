import { Router, Request, Response } from "express";

const router: Router = Router();

type TUser = { name: string; email: string };
const users: TUser[] = [];

// Task 1: Hello World Route
router.get("/hello", (req: Request, res: Response) => {
  res.json({ msg: "Hello world!" });
});

// Task 2: ID Echoing Route
router.get("/echo/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  res.json({ id });
});

// Task 3: POST Sum Route
router.post("/sum", (req: Request, res: Response) => {
  const numbers: number[] = req.body.numbers;

  // Calculate the sum
  const sum = numbers.reduce((a, b) => a + b, 0);
  res.json({ sum });
});

// Task 4: Add User Route
router.post("/users", (req: Request, res: Response) => {
  const user: TUser = req.body;

  // Add the user to the list
  users.push(user);
  res.json({ message: "User successfully added" });
});

// Task 5: Get Users Route
router.get("/users", (req: Request, res: Response) => {
  res.status(201).json(users);
});

export default router;
