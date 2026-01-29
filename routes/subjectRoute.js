const express = require('express');
const { createSubject, getSubjects, getSubjectById, updateSubject, deleteSubject } = require('../controller/subjectController');
const { validateSubject, validateUpdateSubject } = require('../middleware/subjectValidate');
const router = express.Router();

router.post('/add', validateSubject, createSubject);
router.get('/all', getSubjects);
router.get('/:id', getSubjectById);
router.put('/update/:id', validateUpdateSubject, updateSubject);
router.delete('/delete/:id', deleteSubject);
module.exports = router;
