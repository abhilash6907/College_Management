const Joi = require('joi');

const studentSchema = Joi.object({
  name: Joi.string().trim().min(2).max(100).required(),
  course: Joi.string().trim().max(100),
  year: Joi.number().integer().min(1).max(5),
});

const validateStudent = (req, res, next) => {
  const { error } = studentSchema.validate(req.body, { abortEarly: false });
  if (error) {
    return res.status(400).json({ errors: error.details.map(d => d.message) });
  }
  next();
};

const validateUpdateStudent = (req, res, next) => {
  const updateSchema = studentSchema.fork(Object.keys(studentSchema.describe().keys), (field) => field.optional());
  const { error } = updateSchema.validate(req.body, { abortEarly: false });
  if (error) {
    return res.status(400).json({ errors: error.details.map(d => d.message) });
  }
  next();
};

module.exports = { validateStudent, validateUpdateStudent };
