const router = require('express').Router();
const {
  getUsers,
  getUserById,
  updateUser,
  updateUserAvatar,
} = require('../controllers/users');

router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.patch('/users/me', updateUser);
router.patch('/users/avatar', updateUserAvatar);
module.exports = router;
