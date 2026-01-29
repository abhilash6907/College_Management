const Joi = require('joi');

const departmentSchema = Joi.object({
  department_name: Joi.string().trim().min(2).max(100).required(),
  location: Joi.string().trim().max(100),
});

const validateDepartment = (req, res, next) => {
  const { error } = departmentSchema.validate(req.body, { abortEarly: false });
  if (error) {
    return res.status(400).json({ errors: error.details.map(d => d.message) });
  }
  next();
};

const validateUpdateDepartment = (req, res, next) => {
  const updateSchema = departmentSchema.fork(Object.keys(departmentSchema.describe().keys), (field) => field.optional());
  const { error } = updateSchema.validate(req.body, { abortEarly: false });
  if (error) {
    return res.status(400).json({ errors: error.details.map(d => d.message) });
  }
  next();
};

module.exports = { validateDepartment, validateUpdateDepartment };
