const express = require('express');
const { createUser, getUser, updateUser, deleteUser } = require('../controllers/userController');
const router = express.Router();

router.post('/', createUser);   // Create User
router.get('/:id', getUser);    // Get User by ID
router.put('/:id', updateUser); // Update User
router.delete('/:id', deleteUser); // Delete User

module.exports = router;
