const router = require('express').Router();
const fsPromises = require('fs').promises;
const path = require('path');

function cards(req, res) {
  const filePath = path.join(__dirname, '..', 'data', 'cards.json');
  fsPromises
    .readFile(filePath, { encoding: 'utf8' })
    .then((dataCards) => JSON.parse(dataCards))
    .then((dataCards) => res.status(200).send(dataCards))
    .catch((err) => console.log(err));
}

router.get('/cards', cards);

module.exports = router;
