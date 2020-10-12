const db = require('../models');
const User = db.user;

checkDuplicateUsernameorEmail = (req, res, next) => {
  User.findOne({ username: req.body.username }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
    }

    if (user) {
      res.status(400).send({ message: 'Failed! Username already in use' });
      return;
    }

    User.findOne({ email: req.user.email }).exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
      }

      if (user) {
        res.status(400).send({ message: 'Failed! Email already in use' });
        return;
      }

      next();
    });
  });
};

const verifySignUp = {
  checkDuplicateUsernameorEmail,
};

module.exports = verifySignUp;
