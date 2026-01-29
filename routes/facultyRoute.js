const express = require('express');
const { createFaculty, getFaculties, getFacultyById, updateFaculty, deleteFaculty } = require('../controller/facultyController');
const { validateFaculty, validateUpdateFaculty } = require('../middleware/facultyValidate');
const router = express.Router();

router.post('/add', validateFaculty, createFaculty);
router.get('/all', getFaculties);
router.get('/:id', getFacultyById);
router.put('/update/:id', validateUpdateFaculty, updateFaculty);
router.delete('/delete/:id', deleteFaculty);
module.exports = router;
