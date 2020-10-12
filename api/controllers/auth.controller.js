const config = require('../config/auth.config');
const db = require('../models');

const User = db.user;

exports.signup = (res, req) => {
  const user = new User({
    username: req.body.username,
    password: bcrypt.hashSync(req.body.password, 8),
  });

  user.save((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (user) {
      return res.status(200).send({ message: 'User was successfully saved' });
    }
  });
};

exports.signin = (req, res) => {
  User.findOne({
    username: req.body.username,
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    if (!user) {
      return res.status(404).send({ message: 'User Not Found' });
    }

    let passwordIsValid = bcrypt.compareSynce(req.body.password, user.password);

    if (!passwordIsValid) {
      return res
        .status(401)
        .send({ accessToken: null, message: 'Invalid Password' });
    }

    let token = jwt.sign({ id: user.id }, config.secret, { expiresIn: 86400 });

    res.status(200).send({
      id: user._id,
      username: user.username,
      accessToken: token,
    });
  });
};
