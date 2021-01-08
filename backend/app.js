const express = require('express');

const categoryRouter = require('./routers/categoryRouter');

const app = express();

app.use('/api/v1/category', categoryRouter);

module.exports = app;
