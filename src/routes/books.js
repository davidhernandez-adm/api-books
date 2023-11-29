const express = require('express');
const router = express.Router();
const Book = require('../models/book');

// CRUD API endpoints

// Get all books
router.get('/', async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (error) {
        res.status(500).json({ message: 'Error getting books', error: error.message });
    }

});

// Get book by id
router.get('/:id', async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.json(book);
    } catch (error) {
        res.status(500).json({ message: 'Error getting book', error: error.message });
    }
});

// Create book
router.post('/', async (req, res) => {
    try {
        const book = new Book(req.body);
        const response = await book.save();
        res.status(201).json(response);
    } catch (error) {
        res.status(500).json({ message: 'Error creating book', error: error.message });
    }
});

// Update book
router.put('/:id', async (req, res) => {
    try {
        const response = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ message: 'Error updating book', error: error.message });
    }
});

// Delete book
router.delete('/:id', async (req, res) => {
    try {
        await Book.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Error deleting book', error: error.message });
    }

});

module.exports = router;
