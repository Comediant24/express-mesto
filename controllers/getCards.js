const Card = require('../models/Card');

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
    res.status(500).send({ message: `Произошла ошибка: ${error}` });
  }
};

const deleteCard = async (req, res) => {
  try {
    await Card.deleteOne({ _id: req.params.cardId });
    res.status(200).send({ message: 'Карточка удалена' });
  } catch (error) {
    res.status(500).send({ message: `Произошла ошибка: ${error}` });
  }
};

const likeCard = async (req, res) => {
  try {
    const likedCard = await Card.findByIdAndUpdate(
      req.params.cardId,
      { $addToSet: { likes: req.user._id } },
      { new: true }
    );
    res.status(200).send(likedCard);
  } catch (error) {
    res.status(500).send({ message: `Произошла ошибка: ${error}` });
  }
};

const dislikeCard = async (req, res) => {
  try {
    const unlikedCard = await Card.findByIdAndUpdate(
      req.params.cardId,
      { $pull: { likes: req.user._id } },
      { new: true }
    );
    res.status(200).send(unlikedCard);
  } catch (error) {
    res.status(500).send({ message: `Произошла ошибка: ${error}` });
  }
};

module.exports = { getCards, createCard, deleteCard, likeCard, dislikeCard };
