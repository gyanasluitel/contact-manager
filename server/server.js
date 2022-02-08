const express = require('express');
const mongoose = require('mongoose');
const contact = require('./routes/api/contact');
const user = require('./routes/api/user');
const config = require('config');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// DB Config
const db = config.get('mongoURI');

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('Connected to MongoDB database'))
  .catch((err) => console.log(err));

app.use(contact);
app.use(user);

// PORT
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
