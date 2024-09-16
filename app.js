const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const employeeRoutes = require('./routes/employeeRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/api/employees', employeeRoutes);

app.use(errorHandler); // Custom error handler

module.exports = app;
