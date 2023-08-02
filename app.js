// app.js

const express = require('express');

// routes
const books = require('./routes/api/books');

const app = express();

app.use(express.json({ extended: false }));

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));

// use Routes
app.use('/api/books', books);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));