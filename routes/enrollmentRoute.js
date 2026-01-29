const express = require('express');
const { createEnrollment, getEnrollments, getEnrollmentById, updateEnrollment, deleteEnrollment } = require('../controller/enrollmentController');
const { validateEnrollment, validateUpdateEnrollment } = require('../middleware/enrollmentValidate');
const router = express.Router();

router.post('/add', validateEnrollment, createEnrollment);
router.get('/all', getEnrollments);
router.get('/:id', getEnrollmentById);
router.put('/update/:id', validateUpdateEnrollment, updateEnrollment);
router.delete('/delete/:id', deleteEnrollment);
module.exports = router;
