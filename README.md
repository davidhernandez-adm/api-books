# 📚 Book Management API

A RESTful API built with **Node.js**, **Express**, and **MongoDB** to manage a digital library of books. This project demonstrates CRUD operations and backend fundamentals in a clean and minimal structure.

---

## 📌 Project Overview

* **Name**: Book Management API
* **Stack**: Node.js, Express.js, MongoDB, Mongoose
* **Purpose**: Provides an API to Create, Read, Update, and Delete books in a MongoDB database
* **Use Case**: Backend learning, API prototyping, CRUD implementation

---

## 📁 Project Structure

```
├── LICENSE                # MIT License
├── package.json           # Project metadata and dependencies
├── src/
│   ├── app.js             # Application entry point
│   ├── models/
│   │   └── book.js        # Book schema definition
│   └── routes/
│       └── books.js       # CRUD endpoints for books
```

---

## 🚀 Getting Started

### Prerequisites

* Node.js >= 14.x
* MongoDB instance (local or cloud)

### Installation

```bash
# 1. Clone the repo
git clone https://github.com/davidhernandez-adm/api-books.git
cd api-books

# 2. Install dependencies
npm install

# 3. Set your MongoDB connection string
# Edit src/app.js and replace:
# mongoose.connect('your-connection-mongodb')

# 4. Start the server
npm start
```

### Run (Development)

```bash
node src/app.js
```

### Environment Variables

You may configure the MongoDB URI via an `.env` file or directly in `app.js`:

```
MONGODB_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/books
```

---

## 📦 Technologies Used

* **Node.js** – JavaScript runtime
* **Express** – HTTP framework
* **MongoDB** – NoSQL database
* **Mongoose** – ODM to interact with MongoDB
* **Body-Parser** – Middleware for JSON parsing

---

## 🧪 Testing and Coverage

> 🚧 Currently not implemented. Add unit tests using Jest or Mocha in future iterations.

---

## 🧠 Key Challenges & Learnings

* **Mongoose relationships** and schema design were reinforced.
* Ensured **robust error handling** in asynchronous route handlers.
* Practiced clean project organization for scalability.

---

## 📷 Screenshots or Live Demo

> Not applicable – this is a backend-only project. Test endpoints with tools like **Postman** or **curl**.

---

## 📜 License

[MIT](./LICENSE)

---

> Crafted with care by [David Hernández](https://github.com/davidhernandez-adm) – feel free to fork, improve, and use it as a learning base.
