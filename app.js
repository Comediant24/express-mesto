const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cards = require('./routes/cards');
const users = require('./routes/users');
const bodyParser = require('body-parser');

const app = express();
mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());

const { PORT = 3000 } = process.env;

app.use(cards, users);

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
  res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
});

app.listen(PORT);
