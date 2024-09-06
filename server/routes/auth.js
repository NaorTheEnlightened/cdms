// routes/auth.js
const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const router = express.Router();
const { register, login } = require('../controllers/authController');

router.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }),
);

router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    // Successful authentication, redirect or send JWT
    const token = jwt.sign(
      { user: { id: req.user.id } },
      // process.env.JWT_SECRET,
      'GOCSPX-secret',
      { expiresIn: '1h' },
    );
    res.redirect(`/oauth/callback?token=${token}`);
  },
);

router.get(
  '/github',
  passport.authenticate('github', { scope: ['user:email'] }),
);

router.get(
  '/github/callback',
  passport.authenticate('github', { failureRedirect: '/login' }),
  (req, res) => {
    // Successful authentication, redirect or send JWT
    const token = jwt.sign(
      { user: { id: req.user.id } },
      // process.env.JWT_SECRET,
      'secret',
      { expiresIn: '1h' },
    );
    res.redirect(`/oauth/callback?token=${token}`);
  },
);

router.post('/register', register);
router.post('/login', login);

module.exports = router;
