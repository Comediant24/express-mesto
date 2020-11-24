const express = require('express');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cards = require('./routes/cards');
const users = require('./routes/users');
const auth = require('./middlewares/auth');
const { createUser, loginUser } = require('./controllers/users');

const app = express();
mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});
app.use(cookieParser());
app.use(bodyParser.json());

app.use((req, res, next) => {
  req.user = {
    _id: '5f9588dabbfebc4804a1794a',
  };

  next();
});
const { PORT = 3000 } = process.env;

app.post('/signup', createUser);
app.post('/signin', loginUser);

app.use(auth);
app.use(cards, users);

app.get('*', (req, res) => {
  res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
});

app.listen(PORT);
