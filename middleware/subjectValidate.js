const Joi = require('joi');

const subjectSchema = Joi.object({
  subject_name: Joi.string().trim().min(2).max(100).required(),
});

const validateSubject = (req, res, next) => {
  const { error } = subjectSchema.validate(req.body, { abortEarly: false });
  if (error) {
    return res.status(400).json({ errors: error.details.map(d => d.message) });
  }
  next();
};

const validateUpdateSubject = (req, res, next) => {
  const updateSchema = subjectSchema.fork(Object.keys(subjectSchema.describe().keys), (field) => field.optional());
  const { error } = updateSchema.validate(req.body, { abortEarly: false });
  if (error) {
    return res.status(400).json({ errors: error.details.map(d => d.message) });
  }
  next();
};

module.exports = { validateSubject, validateUpdateSubject };
