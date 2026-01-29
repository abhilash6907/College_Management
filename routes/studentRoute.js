const express = require('express');
const { createStudent, getStudents, getStudentById, updateStudent, deleteStudent } = require('../controller/studentController');
const { validateStudent, validateUpdateStudent } = require('../middleware/studentValidate');
const router = express.Router();

router.post('/add', validateStudent, createStudent);
router.get('/all', getStudents);
router.get('/:id', getStudentById);
router.put('/update/:id', validateUpdateStudent, updateStudent);
router.delete('/delete/:id', deleteStudent);

module.exports = router;
