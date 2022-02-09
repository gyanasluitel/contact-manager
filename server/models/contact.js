const mongoose = require('mongoose');
const sharp = require('sharp');

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
  email: {
    type: String,
  },
  address: {
    type: String,
  },
  // image: {
  //   type: String,
  //   required: true,
  // },
  owner: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
});

// contactSchema.methods.uploadImage = async (req, res) => {
//   const imageUploaded = new Contact({
//     image: req.file.path,
//   });

//   try {
//     await imageUploaded.save();
//   } catch (err) {
//     return res.status(400).json({
//       message: `Upload failed. Check ${error}`,
//       status: 'error',
//     });
//   }

const Contact = model('Contact', contactSchema);

module.exports = Contact;
