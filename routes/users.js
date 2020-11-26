const router = require('express').Router();
const {
  getUsers,
  getUserById,
  updateUser,
  updateUserAvatar,
  getUserMe,
} = require('../controllers/users');

router.get('/users', getUsers);
router.get('/users/me', getUserMe);
router.get('/users/:id', getUserById);
router.patch('/users/me', updateUser);
router.patch('/users/avatar', updateUserAvatar);
module.exports = router;
