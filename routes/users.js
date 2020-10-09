const router = require('express').Router();
const fsPromises = require('fs').promises;
const path = require('path');

function getAllUsers(req, res) {
  const filePath = path.join(__dirname, '..', 'data', 'users.json');
  fsPromises
    .readFile(filePath, { encoding: 'utf8' })
    .then((users) => JSON.parse(users))
    .then((users) => res.send(users))
    .catch((err) => console.log(err));
}

function getUserById(req, res) {
  const filePath = path.join(__dirname, '..', 'data', 'users.json');
  fsPromises
    .readFile(filePath, { encoding: 'utf8' })
    .then((users) => JSON.parse(users))
    .then((users) => {
      const currentUser = users.find((user) => user._id === req.params.id);
      if (!currentUser) {
        res.status(404).send({ message: 'Нет пользователя с таким id' });
        return;
      }
      res.send(currentUser);
    })
    .catch((err) => console.log(err));
}

router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);

module.exports = router;
