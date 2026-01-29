const facultyDao = require('../daos/facultyDao');
const createFaculty = async (req, res) => {
    try {
        const faculty = await facultyDao.createFaculty(req.body);
        res.status(201).json(faculty);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
const getFaculties = async (req, res) => {
    try {
        const faculties = await facultyDao.getAllFaculties();
        res.status(200).json(faculties);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
const getFacultyById = async (req, res) => {
    try {
        const faculty = await facultyDao.getFacultyById(req.params.id);
        if (!faculty) return res.status(404).json({ error: 'Faculty not found' });
        res.status(200).json(faculty);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
const updateFaculty = async (req, res) => {
    try {
        const faculty = await facultyDao.updateFaculty(req.params.id, req.body);
        if (!faculty) return res.status(404).json({ error: 'Faculty not found' });
        res.status(200).json({ msg: 'Faculty updated' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
const deleteFaculty = async (req, res) => {
    try {
        const result = await facultyDao.deleteFaculty(req.params.id);
        if (!result) return res.status(404).json({ error: 'Faculty not found' });
        res.status(200).json({ msg: 'Faculty deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
module.exports = { createFaculty, getFaculties, getFacultyById, updateFaculty, deleteFaculty };
