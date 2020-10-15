const fsPromises = require('fs').promises;

module.exports = (pathToFile) => {
  return fsPromises
    .readFile(pathToFile, { encoding: 'utf8' })
    .then((data) => {
      console.log('data', data);
      return JSON.parse(data);
    })
    .catch((err) => err);
};
