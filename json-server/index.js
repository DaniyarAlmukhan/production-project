/* eslint-disable consistent-return */
const fs = require('fs');
const jsonServer = require('json-server');
const path = require('path');
// const jwt = require('jsonwebtoken');

const server = jsonServer.create();

const router = jsonServer.router(path.join(__dirname, 'db.json'));

server.use(async (req, res, next) => {
  await new Promise((resolve, reject) => {
    setTimeout(resolve, 500);
  });
  next();
});

server.use((req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).json({ message: 'AUTH ERROR' });
  }

  next();
});

server.use(jsonServer.defaults());
server.use(router);

server.post('/login', (req, res) => {
  const { username, password } = req.body;
  const db = JSON.parse(fs.readFileSync(path.join(__dirname, 'db.json'), 'UTF-8'));
  const { users } = db;

  const userFromDb = users.find((user) => user.username === username && user.password === password);

  if (userFromDb) {
    return res.json(userFromDb);
  }

  return res.status(403).json({ message: 'Invalid credentials' });
});

server.listen(8000, () => {
  console.log('JSON Server is running');
});
