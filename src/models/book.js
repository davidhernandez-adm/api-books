const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: String,
  autor: String,
  description: String,
  year: Number
});

module.exports = mongoose.model('Book', bookSchema);
