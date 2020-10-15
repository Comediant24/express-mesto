const router = require('express').Router();
const fsPromises = require('fs').promises;
const path = require('path');
const { getUsers, getUserById } = require('../controllers/getUsers');

router.get('/users', getUsers);
router.get('/users/:id', getUserById);

module.exports = router;
