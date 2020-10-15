const path = require('path');
const readFile = require('../utils/read-file');

const getCards = (req, res) => {
  readFile(path.join(__dirname, '..', 'data', 'cards.json'))
    .then((data) => res.send(data))
    .catch((err) => {
      res.status(500).send({ message: `Произошла ошибка: ${err}` });
    });
};

module.exports = { getCards };
