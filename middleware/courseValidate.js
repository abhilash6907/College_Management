const Joi = require('joi');

const courseSchema = Joi.object({
  course_name: Joi.string().trim().min(2).max(100).required(),
  credits: Joi.number().integer().min(1).max(10).default(3),
});

const validateCourse = (req, res, next) => {
  const { error } = courseSchema.validate(req.body, { abortEarly: false });
  if (error) {
    return res.status(400).json({ errors: error.details.map(d => d.message) });
  }
  next();
};

const validateUpdateCourse = (req, res, next) => {
  const updateSchema = courseSchema.fork(Object.keys(courseSchema.describe().keys), (field) => field.optional());
  const { error } = updateSchema.validate(req.body, { abortEarly: false });
  if (error) {
    return res.status(400).json({ errors: error.details.map(d => d.message) });
  }
  next();
};

module.exports = { validateCourse, validateUpdateCourse };
