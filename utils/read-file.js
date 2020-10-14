const fsPromises = require('fs').promises;

module.exports = (pathToFIle) => {
  fsPromises
    .readFile(pathToFIle, { encoding: 'utf8' })
    .then((data) => JSON.parse(data))
    .catch((err) => err);
};
