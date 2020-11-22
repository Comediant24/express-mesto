const bcrypt = require('bcryptjs');
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
      res.status(404).send({ message: 'Нет пользователя с таким id' });
      return;
    }
    res.status(200).send(user);
  } catch (error) {
    if (error.name === 'CastError') {
      res.status(400).send({ message: 'Некорректные данные' });
      return;
    }
    res.status(500).send({ message: `Произошла ошибка: ${error}` });
  }
};

const createUser = async (req, res) => {
  const {
    name, about, avatar, email, password,
  } = req.body;
  try {
    const hash = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      name,
      about,
      avatar,
      email,
      password: hash,
    });
    res.status(200).send({
      message: 'Пользователь зарегестрирован',
      _id: newUser.id,
      email: newUser.email,
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      res.status(400).send({ message: 'Некорректные данные' });
      return;
    }
    res.status(500).send({ message: `Произошла ошибка: ${error}` });
  }
};

const updateUser = async (req, res) => {
  const { name, about } = req.body;
  try {
    const upUser = await User.findByIdAndUpdate(
      req.user._id,
      {
        name,
        about,
      },
      {
        new: true,
        runValidators: true,
        upsert: true,
      },
    );
    res.status(200).send(upUser);
  } catch (error) {
    if (error.name === 'ValidationError') {
      res.status(400).send({ message: 'Некорректные данные' });
      return;
    }
    res.status(500).send({ message: `Произошла ошибка: ${error}` });
  }
};

const updateUserAvatar = async (req, res) => {
  const { avatar } = req.body;
  try {
    const upUser = await User.findByIdAndUpdate(
      req.user._id,
      { avatar },
      {
        new: true,
        runValidators: true,
        upsert: true,
      },
    );
    res.status(200).send(upUser);
  } catch (error) {
    if (error.name === 'ValidationError') {
      res.status(400).send({ message: 'Некорректные данные' });
      return;
    }
    res.status(500).send({ message: `Произошла ошибка: ${error}` });
  }
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  updateUserAvatar,
};
