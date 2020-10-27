const Card = require('../models/card');

const getCards = async (req, res) => {
  try {
    const Cards = await Card.find({});
    res.status(200).send(Cards);
  } catch (error) {
    res.status(500).send({ message: `Произошла ошибка: ${error}` });
  }
};

const createCard = async (req, res) => {
  const { name, link } = req.body;
  try {
    const newCard = await Card.create({ name, link, owner: req.user._id });
    res.status(200).send(newCard);
  } catch (error) {
    if (error.name === 'ValidationError') {
      res.status(400).send({ message: 'Некорректные данные' });
      return;
    }
    res.status(500).send({ message: `Произошла ошибка: ${error}` });
  }
};

const deleteCard = async (req, res) => {
  try {
    const delCard = await Card.findByIdAndRemove({ _id: req.params.cardId });
    if (!delCard) {
      res.status(404).send({ message: 'Такой карточки не существует!' });
      return;
    }
    res.status(200).send({ message: `Карточка удалена ${delCard}` });
  } catch (error) {
    if (error.name === 'CastError') {
      res.status(400).send({ message: 'Некорректные данные' });
      return;
    }
    res.status(500).send({ message: `Произошла ошибка: ${error}` });
  }
};

const likeCard = async (req, res) => {
  try {
    const likedCard = await Card.findByIdAndUpdate(
      req.params.cardId,
      { $addToSet: { likes: req.user._id } },
      { new: true },
    );
    res.status(200).send(likedCard);
  } catch (error) {
    if (error.name === 'CastError') {
      res.status(400).send({ message: 'Некорректные данные' });
      return;
    }
    res.status(500).send({ message: `Произошла ошибка: ${error}` });
  }
};

const dislikeCard = async (req, res) => {
  try {
    const unlikedCard = await Card.findByIdAndUpdate(
      req.params.cardId,
      { $pull: { likes: req.user._id } },
      { new: true },
    );
    res.status(200).send(unlikedCard);
  } catch (error) {
    if (error.name === 'CastError') {
      res.status(400).send({ message: 'Некорректные данные' });
      return;
    }
    res.status(500).send({ message: `Произошла ошибка: ${error}` });
  }
};

module.exports = {
  getCards,
  createCard,
  deleteCard,
  likeCard,
  dislikeCard,
};
