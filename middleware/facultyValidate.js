const Joi = require('joi');

const facultySchema = Joi.object({
  name: Joi.string().trim().min(2).max(100).required(),
  department: Joi.string().trim().max(100),
});

const validateFaculty = (req, res, next) => {
  const { error } = facultySchema.validate(req.body, { abortEarly: false });
  if (error) {
    return res.status(400).json({ errors: error.details.map(d => d.message) });
  }
  next();
};

const validateUpdateFaculty = (req, res, next) => {
  const updateSchema = facultySchema.fork(Object.keys(facultySchema.describe().keys), (field) => field.optional());
  const { error } = updateSchema.validate(req.body, { abortEarly: false });
  if (error) {
    return res.status(400).json({ errors: error.details.map(d => d.message) });
  }
  next();
};

module.exports = { validateFaculty, validateUpdateFaculty };
