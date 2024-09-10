const express = require('express');
const { addBook, getBook, updateBook, deleteBook } = require('../controllers/bookController');
const router = express.Router();

router.post('/', addBook);       // Add Book
router.get('/:id', getBook);     // Get Book by ID
router.put('/:id', updateBook);  // Update Book
router.delete('/:id', deleteBook); // Delete Book

module.exports = router;
