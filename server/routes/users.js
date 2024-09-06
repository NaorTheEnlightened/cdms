// routes/users.js
const express = require('express');

const router = express.Router();
const {
  getCurrentUser,
  updateUser,
  deleteUser,
} = require('../controllers/userController');
const auth = require('../middleware/auth');

router.get('/me', auth, getCurrentUser);
router.put('/update', auth, updateUser);
router.delete('/delete', auth, deleteUser);

module.exports = router;
