import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors()); // enable CORS for all routes

interface User {
  id: number;
  name: string;
  email: string;
}

let users: User[] = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' },
];

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, world!');
});

app.get('/api/users', (req: Request, res: Response) => {
  res.json(users);
});

app.get('/api/users/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const user = users.find((user) => user.id === id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).send('User not found');
  }
});

app.post('/api/users', (req: Request, res: Response) => {
  const user: User = req.body;
  users.push(user);
  res.json(user);
});

app.put('/api/users/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const userIndex = users.findIndex((user) => user.id === id);
  if (userIndex !== -1) {
    users[userIndex] = { ...users[userIndex], ...req.body };
    res.json(users[userIndex]);
  } else {
    res.status(404).send('User not found');
  }
});

app.delete('/api/users/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const userIndex = users.findIndex((user) => user.id === id);
  if (userIndex !== -1) {
    users.splice(userIndex, 1);
    res.sendStatus(204);
  } else {
    res.status(404).send('User not found');
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
