const User = require('../models/user');

const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send({ message: `Произошла ошибка: ${error}` });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findById({ _id: req.params.id });
    if (!user) {
      return res.status(404).send({ message: 'Нет пользователя с таким id' });
    }
    return res.status(200).send(user);
  } catch (error) {
    res.status(500).send({ message: 'Нет пользователя с таким id' });
  }
};

const createUser = async (req, res) => {
  const { name, about, avatar } = req.body;
  try {
    const newUser = await User.create({ name, about, avatar });
    res.status(200).send(newUser);
  } catch (error) {
    res.status(500).send({ message: `Произошла ошибка: ${error}` });
  }
};

module.exports = { getUsers, getUserById, createUser };
