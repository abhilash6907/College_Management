const enrollmentDao = require('../daos/enrollmentDao');
const createEnrollment = async (req, res) => {
    try {
        const enrollment = await enrollmentDao.createEnrollment(req.body);
        res.status(201).json(enrollment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
const getEnrollments = async (req, res) => {
    try {
        const enrollments = await enrollmentDao.getAllEnrollments();
        res.status(200).json(enrollments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
const getEnrollmentById = async (req, res) => {
    try {
        const enrollment = await enrollmentDao.getEnrollmentById(req.params.id);
        if (!enrollment) return res.status(404).json({ error: 'Enrollment not found' });
        res.status(200).json(enrollment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
const updateEnrollment = async (req, res) => {
    try {
        const enrollment = await enrollmentDao.updateEnrollment(req.params.id, req.body);
        if (!enrollment) return res.status(404).json({ error: 'Enrollment not found' });
        res.status(200).json({ msg: 'Enrollment updated' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
const deleteEnrollment = async (req, res) => {
    try {
        const result = await enrollmentDao.deleteEnrollment(req.params.id);
        if (!result) return res.status(404).json({ error: 'Enrollment not found' });
        res.status(200).json({ msg: 'Enrollment deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
module.exports = { createEnrollment, getEnrollments, getEnrollmentById, updateEnrollment, deleteEnrollment };
