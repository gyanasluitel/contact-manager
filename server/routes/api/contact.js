const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

// Contact Model
const Contact = require('../../models/contact');

// @route GET /contacts
// @desc Get All Contacts
// @access will be Private (currently Public)
router.get('/contacts', auth, (req, res) => {
  Contact.find().then((contacts) => res.json(contacts));
});

// @route POST /contacts
// @desc Create A Contact
// @access Private
router.post('/contacts', auth, (req, res) => {
  const { name, phone, email, address } = req.body;

  const newContact = new Contact({
    name,
    phone,
    email,
    address,
    // owner: req.user.id,
  });

  newContact
    .save()
    .then((contact) => res.json(contact))
    .catch((err) => res.send(err));
});

// @route PUT /contacts/{contact_id}
// @desc Update A Contact
// @access Private
router.put('/contacts/:contact_id', auth, (req, res) => {
  const { name, phone, email, address } = req.body;

  Contact.findByIdAndUpdate(
    req.params.contact_id,
    {
      name,
      phone,
      email,
      address,
    },
    { new: true }
  )
    .then((contact) => res.json(contact))
    .catch((err) => res.send(err));
});

// @route DELETE /contacts/{contact_id}
// @desc Delete A Contact
// @access Private
router.delete('/contacts/:contact_id', auth, (req, res) => {
  Contact.findById(req.params.contact_id)
    .then((contact) => contact.remove().then(() => res.json({ delete: true })))
    .catch((err) => res.status(404).send('No such contact found'));
});

module.exports = router;
