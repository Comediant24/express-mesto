const router = require('express').Router();
const users = require('../data/users.json');

router.get('/users', (req, res) => {
  res.send(users);
});

router.get('/users/:id', (req, res) => {
  if (!users[req.params.id]) {
    res.send({ message: "Нет пользователя с таким id" });
    return;
  }
  res.send(users[req.params.id]);
});

module.exports = router;
