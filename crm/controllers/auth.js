const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

const User = require("../models/User");
const keys = require('../config/keys');
const errorHendler = require('../utils/errorHandler');

module.exports.login = async function(req, res) {
  const candidate = await User.findOne({ email: req.body.email });

  if (candidate) {
    // Checking password, user exists
    const passResult = bcrypt.compareSync(req.body.password, candidate.password);
    if (passResult) {
      const token = jwt.sign({
        email: candidate.email,
        userId: candidate._id
      }, keys.jwt, {expiresIn: 60 * 60})

      res.status(200).json({
        token: `Bearer ${token}`
      })
    } else {
      //Passwords not match
      res.status(401).json({
        message: "Passwords did'n match. Try again."
      });
    }
  } else {
    //User not found, error
    res.status(404).json({
      message: "User with email not found"
    });
  }
};

module.exports.register = async function(req, res) {
  // email password
  const candidate = await User.findOne({ email: req.body.email });

  if (candidate) {
    // User exists, send error
    res.status(409).json({ message: "Email is already taken. Try another." });
  } else {
    //Create User
    const salt = bcrypt.genSaltSync(10);
    const pass = req.body.password;
    const user = new User({
      email: req.body.email,
      password: bcrypt.hashSync(pass, salt)
    });

    try {
      await user.save();
      res.status(201).json({ user });
    } catch (error) {
      // error
      errorHendler(res. error);
    }
  }
};
