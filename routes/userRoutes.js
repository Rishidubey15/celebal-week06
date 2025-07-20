const express = require('express');
const router = express.Router();
const {
  getUsers, getUser, createUser, updateUser, deleteUser
} = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

router.get('/', getUsers);
router.get('/:id', getUser);

router.post('/', protect, createUser);
router.put('/:id', protect, updateUser);
router.delete('/:id', protect, deleteUser);

module.exports = router;
