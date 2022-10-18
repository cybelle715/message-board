var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hello!",
    user: "Monick",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Monick",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Mini Messageboard", messages: messages });
});

router.post('/new', function(req, res, next) {
  let messageText = req.body.messageText;
  let messageUser = req.body.messageUser;
  messages.push({text: messageText, user: messageUser, added: new Date()});
  res.redirect('/')
});

module.exports = router;
