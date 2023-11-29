# Book Management API

## Overview

This project is a RESTful API for managing a book library. It's built using Node.js, Express, and MongoDB, showcasing the basic CRUD (Create, Read, Update, Delete) operations. This API is ideal for anyone looking to learn or understand backend development with Node.js.

## Features

- CRUD operations for books.
- Simple and clean code structure.
- Connection to MongoDB for data persistence.
- Ready for deployment to Heroku.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose (MongoDB object modeling for Node.js)
- Body-parser (middleware for parsing HTTP body)

## Getting Started

### Prerequisites

- Node.js
- MongoDB instance (local or remote)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/davidhernandezeverdax/api-books.git

2. Navigate to the project directory:
   ```bash
   cd api-books

3. Install dependencies:
   ```bash
   npm install

4. Set up your MongoDB connection string in app.js:
   ```bash
   mongoose.connect('your-connection-mongodb')

5. Start the server:
    node src/app.js
   
