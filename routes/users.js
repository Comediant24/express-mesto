const router = require('express').Router();
const {
  getUsers,
  getUserById,
  createUser,
} = require('../controllers/getUsers');

router.get('/users', getUsers);

router.get('/users/:id', getUserById);

router.post('/users', createUser);

module.exports = router;
