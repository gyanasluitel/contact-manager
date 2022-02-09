const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const config = require('config');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');
const validation = require('../../middleware/validator');
const schema = require('../../utils/schema');

// Contact Model
const User = require('../../models/user');

// @route POST /signup
// @desc Create New User
// @access Public
router.post('/signup', (req, res) => {
  const { email, password } = req.body;

  // Validation
  if (!email || !password) {
    return res.status(400).json({ msg: 'Please enter all the fields' });
  }

  // Check for existing user
  User.findOne({ email }).then((user) => {
    if (user) {
      return res.status(400).json({ msg: 'Username already exits' });
    }

    const newUser = new User({
      email,
      password,
    });

    // Create salt and hash
    bcrypt.genSalt(8, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser.save().then((user) => {
          jwt.sign(
            { id: user.id },
            config.get('jwtSecret'),
            { expiresIn: 1800 }, //Expires at 30min
            (err, token) => {
              if (err) throw err;
              res.json({
                token,
                user: {
                  id: user.id,
                  email: user.email,
                },
              });
            }
          );
        });
      });
    });
  });
});

// @route POST /signin
// @desc Sign In User
// @access Public
router.post('/signin', (req, res) => {
  const { email, password } = req.body;

  // Validation
  if (!email || !password) {
    return res.status(400).json({ msg: 'Please enter all the fields' });
  }

  // Check for existing user
  User.findOne({ email }).then((user) => {
    if (!user) {
      return res.status(400).json({ msg: 'User does not exist' });
    }

    //Validating password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

      jwt.sign(
        { id: user.id },
        config.get('jwtSecret'),
        { expiresIn: 1800 }, //Expires at 30min
        (err, token) => {
          if (err) throw err;
          res.json({
            token,
            user: {
              id: user.id,
              email: user.email,
            },
          });
        }
      );
    });
  });
});

// @route GET /user
// @desc Get user data
// @access Private
router.get('/user', auth, (req, res) => {
  User.findById(req.user.id)
    .select('-password')
    .then((user) => res.json(user));
});

module.exports = router;
