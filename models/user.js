/* eslint-disable func-names */
const bcrypt = require('bcryptjs');
const { Schema, model } = require('mongoose');
const isEmail = require('validator/lib/isEmail');

const userSchema = new Schema({
  name: {
    type: String,
    default: 'Жак-Ив Кусто',
    minlength: [2, 'Имя слишком короткое'],
    maxlength: [30, 'Имя слишком длинное'],
  },
  about: {
    type: String,
    default: 'Исследователь',
    minlength: [2, 'Информация о себе слишком короткая'],
    maxlength: [30, 'Информация о себе слишком длинная'],
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator(v) {
        return isEmail(v);
      },
      message: 'Некорректный email',
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  avatar: {
    type: String,
    default: 'https://pictures.s3.yandex.net/resources/jacques-cousteau_1604399756.png',
    validate: {
      validator(v) {
        return /(:?(?:https?:\/\/)?(?:www\.)?)?[-a-z0-9]+\.\w/g.test(v);
      },
      message: 'Некорректный url',
    },
  },
});

userSchema.statics.findUserByCredentials = async function (email, password) {
  try {
    const user = await this.findOne({ email });
    await bcrypt.compare(password, user.password);
    return user;
  } catch (error) {
    return new Error('Неправильные почта или пароль');
  }
};

module.exports = model('user', userSchema);
