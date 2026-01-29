const express = require('express');
const { createCourse, getCourses, getCourseById, updateCourse, deleteCourse } = require('../controller/courseController');
const { validateCourse, validateUpdateCourse } = require('../middleware/courseValidate');
const router = express.Router();

router.post('/add', validateCourse, createCourse);
router.get('/all', getCourses);
router.get('/:id', getCourseById);
router.put('/update/:id', validateUpdateCourse, updateCourse);
router.delete('/delete/:id', deleteCourse);
module.exports = router;
