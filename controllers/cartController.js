const Cart = require('../models/cartModel');
const Book = require('../models/bookModel');

// Add a book to the cart
const addToCart = async (req, res) => {
  const { userId, bookId, quantity } = req.body;

  const cart = await Cart.findOne({ userId });
  if (!cart) {
    const newCart = new Cart({
      userId,
      items: [{ bookId, quantity }]
    });
    await newCart.save();
    return res.status(201).json(newCart);
  }

  const bookInCart = cart.items.find(item => item.bookId.toString() === bookId);
  if (bookInCart) {
    bookInCart.quantity += quantity;
  } else {
    cart.items.push({ bookId, quantity });
  }

  await cart.save();
  res.json(cart);
};

// Remove a book from the cart
const removeFromCart = async (req, res) => {
  const { userId } = req.query;
  const { bookId } = req.params;

  const cart = await Cart.findOne({ userId });
  if (!cart) {
    return res.status(404).json({ message: 'Cart not found' });
  }

  cart.items = cart.items.filter(item => item.bookId.toString() !== bookId);
  await cart.save();
  res.json(cart);
};

// Update the quantity of a book in the cart
const updateCart = async (req, res) => {
  const { userId, quantity } = req.body;
  const { bookId } = req.params;

  const cart = await Cart.findOne({ userId });
  if (!cart) {
    return res.status(404).json({ message: 'Cart not found' });
  }

  const bookInCart = cart.items.find(item => item.bookId.toString() === bookId);
  if (bookInCart) {
    bookInCart.quantity = quantity;
    await cart.save();
    res.json(cart);
  } else {
    res.status(404).json({ message: 'Book not found in cart' });
  }
};

// Get the contents of the cart
const getCart = async (req, res) => {
  const { userId } = req.query;

  const cart = await Cart.findOne({ userId }).populate('items.bookId');
  if (!cart) {
    return res.status(404).json({ message: 'Cart not found' });
  }

  res.json(cart);
};

module.exports = { addToCart, removeFromCart, updateCart, getCart };
