const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: [2, 'Имя слишком короткое'],
    maxlength: [30, 'Имя слишком длинное'],
  },
  about: {
    type: String,
    required: true,
    minlength: [2, 'Информация о себе слишком короткая'],
    maxlength: [30, 'Информация о себе слишком длинная'],
  },
  avatar: {
    type: String,
    required: [true, 'У пользователя должен быть аватар'],
    validate: {
      validator(v) {
        return /(:?(?:https?:\/\/)?(?:www\.)?)?[-a-z0-9]+\.\w/g.test(v);
      },
      message: 'Некорректный url',
    },
  },
});

module.exports = model('user', userSchema);
