const express = require('express');
const { addToCart, removeFromCart, updateCart, getCart } = require('../controllers/cartController');
const router = express.Router();

router.post('/', addToCart);       // Add to Cart
router.delete('/:bookId', removeFromCart); // Remove from Cart
router.put('/:bookId', updateCart); // Update Cart
router.get('/', getCart);         // Get Cart

module.exports = router;
