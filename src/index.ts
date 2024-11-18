import express, { Request, Response } from "express";
import path from "path";

const app = express();
const PORT = 3000;

type TUser = { name: string; email: string };
const users: TUser[] = [];

// Middleware
app.use(express.json()); // Parse JSON in request bodies
app.use(express.static(path.join(__dirname, "../public"))); // Serve static files

// Task 1: Hello World Route
app.get("/hello", (req: Request, res: Response) => {
  res.json({ msg: "Hello world!" });
});

// Task 2: ID Echoing Route
app.get("/echo/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  res.json({ id });
});

// Task 3: POST Sum Route
app.post("/sum", (req: Request, res: Response) => {
  const numbers: number[] = req.body.numbers;

  // Calculate the sum
  const sum = numbers.reduce((a, b) => a + b, 0);
  res.json({ sum });
});

// Task 4: Add User Route
app.post("/users", (req: Request, res: Response) => {
  const user: TUser = req.body;

  // Add the user to the list
  users.push(user);
  res.json({ message: "User successfully added" });
});

// Task 5: Get Users Route
app.get("/users", (req: Request, res: Response) => {
  res.status(201).json(users);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
