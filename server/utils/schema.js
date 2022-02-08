const Joi = require('joi');

exports.userSchema = Joi.object({
  email: Joi.string().email({ minDomainSegments: 2 }).required(),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
}).options({ allowUnknown: true });

exports.contactSchema = Joi.object({
  name: Joi.string().min(5).required(),
  phone: Joi.number().min(7).integer().required(),
  email: Joi.string().email({ minDomainSegments: 2 }),
  address: Joi.string().min(3),
}).options({ allowUnknown: true });
