const Joi = require('joi');

const enrollmentSchema = Joi.object({
  student_id: Joi.number().integer().required(),
  subject_id: Joi.number().integer().required(),
  enrollment_date: Joi.date(),
  grade: Joi.string().uppercase().max(2),
});

const validateEnrollment = (req, res, next) => {
  const { error } = enrollmentSchema.validate(req.body, { abortEarly: false });
  if (error) {
    return res.status(400).json({ errors: error.details.map(d => d.message) });
  }
  next();
};

const validateUpdateEnrollment = (req, res, next) => {
  const updateSchema = enrollmentSchema.fork(Object.keys(enrollmentSchema.describe().keys), (field) => field.optional());
  const { error } = updateSchema.validate(req.body, { abortEarly: false });
  if (error) {
    return res.status(400).json({ errors: error.details.map(d => d.message) });
  }
  next();
};

module.exports = { validateEnrollment, validateUpdateEnrollment };
