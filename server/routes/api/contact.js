const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const validation = require('../../middleware/validator');
const schema = require('../../utils/schema');

// Contact Model
const Contact = require('../../models/contact');

// @route GET /contacts
// @desc Get All Contacts
// @access Private
router.get('/contacts', auth, (req, res) => {
  Contact.find({ owner: req.user.id }).then((contacts) => res.json(contacts));
});

// @route POST /contacts
// @desc Create A Contact
// @access Private
router.post(
  '/contacts',
  auth,
  validation.validateBody(schema.contactSchema),
  (req, res) => {
    const { name, phone, email, address } = req.body;

    const newContact = new Contact({
      name,
      phone,
      email,
      address,
      owner: req.user.id,
    });

    newContact
      .save()
      .then((contact) => res.json(contact))
      .catch((err) => res.send(err));
  }
);

// @route PUT /contacts/{contact_id}
// @desc Update A Contact
// @access Private
router.put(
  '/contacts/:contact_id',
  auth,
  validation.validateBody(schema.contactSchema),
  (req, res) => {
    const { name, phone, email, address } = req.body;

    Contact.findOneAndUpdate(
      { _id: req.params.contact_id, owner: req.user.id },
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
  }
);

// @route DELETE /contacts/{contact_id}
// @desc Delete A Contact
// @access Private
router.delete('/contacts/:contact_id', auth, (req, res) => {
  Contact.findOneAndDelete({ _id: req.params.contact_id, owner: req.user.id })
    .then((contact) => res.json(contact))
    .catch((err) => res.send(err));

  // Contact.findById(req.params.contact_id)
  //   .then((contact) =>
  //     contact.remove().then(() => res.json({ delete: true }))
  //   )
  //   .catch((err) => res.status(404).send('No such contact found'));
});

module.exports = router;
