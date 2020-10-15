const path = require('path');
const readFile = require('../utils/read-file');

const pathToUsers = path.join(__dirname, '..', 'data', 'users.json');

const getUsers = (req, res) => {
  readFile(pathToUsers)
    .then((users) => res.send(users))
    .catch((err) => {
      res.status(500).send({ message: `Произошла ошибка: ${err}` });
    });
};

const getUserById = (req, res) => {
  readFile(pathToUsers)
    .then((users) => {
      const currentUser = users.find((user) => user._id === req.params.id);
      if (!currentUser) {
        res.status(404).send({ message: 'Нет пользователя с таким id' });
        return;
      }
      res.send(currentUser);
    })
    .catch((err) => {
      res.status(500).send({ message: `Произошла ошибка: ${err}` });
    });
};

module.exports = { getUsers, getUserById };
