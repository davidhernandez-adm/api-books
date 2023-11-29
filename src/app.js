const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/books');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('your-connection-mongodb', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error al connecting to MongoDB:', err));

app.use(bodyParser.json());

// Routes
app.use('/books', bookRoutes);

app.listen(PORT, () => {
  console.log(`Server listeing in: ${PORT}`);
});
