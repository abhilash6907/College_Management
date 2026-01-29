const subjectDao = require('../daos/subjectDao');
const createSubject = async (req, res) => {
    try {
        const subject = await subjectDao.createSubject(req.body);
        res.status(201).json(subject);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
const getSubjects = async (req, res) => {
    try {
        const subjects = await subjectDao.getAllSubjects();
        res.status(200).json(subjects);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
const getSubjectById = async (req, res) => {
    try {
        const subject = await subjectDao.getSubjectById(req.params.id);
        if (!subject) return res.status(404).json({ error: 'Subject not found' });
        res.status(200).json(subject);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
const updateSubject = async (req, res) => {
    try {
        const subject = await subjectDao.updateSubject(req.params.id, req.body);
        if (!subject) return res.status(404).json({ error: 'Subject not found' });
        res.status(200).json({ msg: 'Subject updated' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
const deleteSubject = async (req, res) => {
    try {
        const result = await subjectDao.deleteSubject(req.params.id);
        if (!result) return res.status(404).json({ error: 'Subject not found' });
        res.status(200).json({ msg: 'Subject deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
module.exports = { createSubject, getSubjects, getSubjectById, updateSubject, deleteSubject };
