const express = require('express');
// const dotenv = require('dotenv');
// dotenv.config();
// console.log(process.env);

const app = express();
const host = process.env.HOST || '127.0.0.1';
const port = process.env.PORT || '8080';

app.use((req, res, next) => {
  console.log(
    `[${new Date().toLocaleString()}] ${req.ip} ${req.method} ${req.url}`
  );
  next();
});

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to our API',
    cohort: process.env.LAMBDA_COHORT,
    host,
    port,
  });
});

app.listen(port, host, () => {
  console.log(`Running at http://${host}:${port}`);
});
