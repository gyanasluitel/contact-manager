const mongoose = require('mongoose');

const { Schema, model } = mongoose;

// Create Contact Schema
const contactSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
});

const Contact = model('Contact', contactSchema);

module.exports = Contact;
