const courseDao = require('../daos/courseDao');
const createCourse = async (req, res) => {
    try {
        const course = await courseDao.createCourse(req.body);
        res.status(201).json(course);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
const getCourses = async (req, res) => {
    try {
        const courses = await courseDao.getAllCourses();
        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
const getCourseById = async (req, res) => {
    try {
        const course = await courseDao.getCourseById(req.params.id);
        if (!course) return res.status(404).json({ error: 'Course not found' });
        res.status(200).json(course);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
const updateCourse = async (req, res) => {
    try {
        const course = await courseDao.updateCourse(req.params.id, req.body);
        if (!course) return res.status(404).json({ error: 'Course not found' });
        res.status(200).json({ msg: 'Course updated' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
const deleteCourse = async (req, res) => {
    try {
        const result = await courseDao.deleteCourse(req.params.id);
        if (!result) return res.status(404).json({ error: 'Course not found' });
        res.status(200).json({ msg: 'Course deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
module.exports = { createCourse, getCourses, getCourseById, updateCourse, deleteCourse };
