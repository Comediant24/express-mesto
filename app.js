const express = require('express');
const path = require('path');
const cards = require('./routes/cards');
const users = require('./routes/users');

const app = express();
const { PORT = 3000 } = process.env;

app.use(cards, users);

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT);
