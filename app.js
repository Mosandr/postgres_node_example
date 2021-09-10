const express = require('express');
const path = require('path');
const publicDir = path.join(__dirname, 'public');
const app = express();

const productsRouter = require('./routes/products');

app.use(express.json());
app.use(express.static(publicDir));

app.use('api/products', productsRouter);

app.use((req, res, next) => {
  res.status(404).json({
    status: 'error',
    code: 404,
    message: `Use api on routes ${req.baseUrl}/api/products `,
    data: 'Not found',
  });
});

app.use((err, req, res, next) => {
  err.status = err.status ? err.status : 500;
  res.status(err.status).json({
    status: err.status === 500 ? 'fail' : 'error',
    code: err.status,
    message: err.message,
    data: err.status === 500 ? 'Internal Server Error' : err.data,
  });
});

module.exports = app;
