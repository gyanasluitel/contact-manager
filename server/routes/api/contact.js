const express = require('express');
const router = express.Router();

// Contact Model
const Contact = require('../../models/contact');

// @route GET /contacts
// @desc GET All Contacts
// @access will be Private (currently Public)
router.get('/', (req, res) => {
  Contact.find()
    .sort({ name: 'asc' })
    .then((contacts) => res.json(contacts));
});

// @route POST /contacts
// @desc Create A Contact
// @access will be Private (currently Public)
router.post('/', (req, res) => {
  const newContact = new Contact({
    name: req.body.name,
    phone: req.body.phone,
  });

  newContact
    .save()
    .then((contact) => res.json(contact))
    .catch((err) => res.send(err));
});

// @route DELETE /contacts/{contact_id}
// @desc Delete A Contact
// @access will be Private (currently Public)
router.delete('/:contact_id', (req, res) => {
  Contact.findById(req.params.contact_id)
    .then((contact) => contact.remove().then(() => res.json({ delete: true })))
    .catch((err) => res.status(404).send('No such contact found'));
});

module.exports = router;
