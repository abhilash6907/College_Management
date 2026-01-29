const express = require('express');
const { createDepartment, getDepartments, getDepartmentById, updateDepartment, deleteDepartment } = require('../controller/departmentController');
const { validateDepartment, validateUpdateDepartment } = require('../middleware/departmentValidate');
const router = express.Router();

router.post('/add', validateDepartment, createDepartment);
router.get('/all', getDepartments);
router.get('/:id', getDepartmentById);
router.put('/update/:id', validateUpdateDepartment, updateDepartment);
router.delete('/delete/:id', deleteDepartment);
module.exports = router;
