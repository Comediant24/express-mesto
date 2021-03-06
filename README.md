<h1 align="center">
    Mesto Russia Express
</h1>

<p align="center">
    <img alt="Version" src="https://img.shields.io/github/package-json/v/Comediant24/express-mesto" />
    <img alt="Quality" src="https://img.shields.io/badge/status-release-orange.svg" >
    <img alt="Made by: Comediany" src="https://img.shields.io/badge/made%20by-Comediant24-blue" />
</p>

## Проект Место - проектная работа по профессии веб-разработчик курса [Яндекс Практикум](https://praktikum.yandex.ru 'Яндекс Практикум')


**Ссылка на готовый проект: [Mesto Russia React-Express](https://bairamukov-mesto.students.nomoreparties.space/)**

## 📖 Задача

Написать и развернуть бекенд для учебного проекта [Mesto](https://github.com/Comediant24/mesto-react-auth).

## 👨🏻‍💻 JavaScript, 🚂 Express

В проекте задействованы две сущности: пользователи и карточки. Схемы и модели созданы через `Mongoose` с валидируемыми полями. Все роуты, кроме логина и логаута, защищены мидлвэрей `auth`, которая проверяет Authorization и наличие в нем токена в приходящих запросах. Обращение к API происходит через роуты с валидацией запросов через `Joi` и `celebrate`. В контроллерах описана логика обработки запросов. Контроллер логина создает `JWT токен` сроком на неделю. В контроллере регистрации пользователя пароль хешеруется модулем `bcryptjs`. В проекте реализована централизованная обработка ошибок через конструкторы ошибок - конструкторы передаются в блоках catch через функцию next и далее в мидлвэр обработки ошибок в app.js. Для логгирования запросов и ошибок используется библиотека `Winston`.

## 📃 Стек

- HTML, CSS
- Javascript
- React
- Node
- Express
- MongoDB

## 🌍 Ссылки на проекты

##### [Mesto React-Auth](https://github.com/Comediant24/react-mesto-auth) – фронтенд часть проекта

## 💻 Установка зависимостей

##### `npm i` – установить зависимости проекта

##### `npm start` – запуск devServer на http://localhost:3000/

##### `npm run build` – production сборка проекта

