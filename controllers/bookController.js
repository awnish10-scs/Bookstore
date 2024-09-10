const Book = require('../models/bookModel');

// Add a new book
const addBook = async (req, res) => {
  const { title, author, price } = req.body;
  const book = new Book({ title, author, price });
  await book.save();
  res.status(201).json(book);
};

// Get a book by ID
const getBook = async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }
  res.json(book);
};

// Update a book by ID
const updateBook = async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }

  const { title, author, price } = req.body;
  book.title = title || book.title;
  book.author = author || book.author;
  book.price = price || book.price;

  await book.save();
  res.json(book);
};

// Delete a book by ID
const deleteBook = async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }

  await book.remove();
  res.json({ message: 'Book deleted' });
};

module.exports = { addBook, getBook, updateBook, deleteBook };
