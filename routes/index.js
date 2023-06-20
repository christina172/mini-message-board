const express = require('express');
const router = express.Router();

const format = require('date-fns/format');

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: format(new Date(), "PPPpp")
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: format(new Date(), "PPPpp")
  }
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: "Mini Message board", messages: messages });
});

router.get('/new', function (req, res, next) {
  res.render('form', { messages: messages });
});

router.post('/new', function (req, res, next) {
  messages.push({ text: req.body.message, user: req.body.name, added: format(new Date(), "PPPpp") });
  res.redirect('/');
});

module.exports = router;
