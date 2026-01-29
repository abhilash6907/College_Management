const studentDao = require('../daos/studentDao');

const createStudent = async (req, res) => {
    try {
        const student = await studentDao.createStudent(req.body);
        res.status(201).json(student);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getStudents = async (req, res) => {
    try {
        const students = await studentDao.getAllStudents();
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getStudentById = async (req, res) => {
    try {
        const student = await studentDao.getStudentById(req.params.id);
        if (!student) return res.status(404).json({ error: 'Student not found' });
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateStudent = async (req, res) => {
    try {
        const student = await studentDao.updateStudent(req.params.id, req.body);
        if (!student) return res.status(404).json({ error: 'Student not found' });
        res.status(200).json({ msg: 'Student updated' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteStudent = async (req, res) => {
    try {
        const result = await studentDao.deleteStudent(req.params.id);
        if (!result) return res.status(404).json({ error: 'Student not found' });
        res.status(200).json({ msg: 'Student deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { createStudent, getStudents, getStudentById, updateStudent, deleteStudent };
