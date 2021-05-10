const express = require('express');
const admin = require('./app.js');

const app = express();

app.use('/admin', admin);

app.listen(process.env.PORT || 8000);