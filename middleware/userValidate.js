const Joi = require('joi');

const userSchema = Joi.object({
  firstName: Joi.string().trim().min(2).max(50).required(),
  lastName: Joi.string().trim().min(2).max(50).required(),
  email: Joi.string().email().lowercase().required(),
  age: Joi.number().integer().min(0).max(120).required(),
  mobileNumber: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .required()
    .messages({
      'string.pattern.base': 'Mobile number must be exactly 10 digits.'
    }),
  isActive: Joi.boolean().default(true)
});

const validateUser = (req, res, next) => {
  const { error } = userSchema.validate(req.body, { abortEarly: false });
  if (error) {
    const errorMessages = error.details.map(detail => detail.message);
    return res.status(400).json({ errors: errorMessages });
  }
  next();
};

const validateUpdateUser = (req, res, next) => {
  // .fork(keys, schema) makes the fields optional for updates
  const updateSchema = userSchema.fork(Object.keys(userSchema.describe().keys), (field) => field.optional());
  const { error } = updateSchema.validate(req.body, { abortEarly: false });
  if (error) {
    const errorMessages = error.details.map(detail => detail.message);
    return res.status(400).json({ errors: errorMessages });
  }
  next();
};

module.exports = { userSchema, validateUser, validateUpdateUser };
