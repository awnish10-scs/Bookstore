const User = require('../models/userModel');

// Create a new user
const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  
  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const user = new User({ name, email, password });
  await user.save();
  res.status(201).json(user);
};

// Get a user by ID
const getUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.json(user);
};

// Update a user by ID
const updateUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  const { name, email, password } = req.body;
  user.name = name || user.name;
  user.email = email || user.email;
  user.password = password || user.password;

  await user.save();
  res.json(user);
};

// Delete a user by ID
const deleteUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  await user.remove();
  res.json({ message: 'User deleted' });
};

module.exports = { createUser, getUser, updateUser, deleteUser };
