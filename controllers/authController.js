const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config/config');

async function register(req, res) {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new User({
      username: req.body.username,
      password: hashedPassword
    });
    await user.save();
    res.status(201).sendJson({ user });
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function login(req, res) {
  const user = await User.findOne({ username: req.body.username });
  if (!user) return res.status(404).send('User not found.');

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(401).send('Invalid password.');

  const token = jwt.sign({ _id: user._id, username: user.username }, config.secretKey);
  res.header('Authorization', token).status(200).sendJson({token});
}

module.exports = { register, login };
