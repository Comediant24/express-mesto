const fsPromises = require('fs').promises;

module.exports = (pathToFile) => {
  return fsPromises
    .readFile(pathToFile, { encoding: 'utf8' })
    .then((data) => {
      return JSON.parse(data);
    })
    .catch((err) => err);
};
