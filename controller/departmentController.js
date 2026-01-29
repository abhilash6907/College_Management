const departmentDao = require('../daos/departmentDao');
const createDepartment = async (req, res) => {
    try {
        const dept = await departmentDao.createDepartment(req.body);
        res.status(201).json(dept);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
const getDepartments = async (req, res) => {
    try {
        const depts = await departmentDao.getAllDepartments();
        res.status(200).json(depts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
const getDepartmentById = async (req, res) => {
    try {
        const dept = await departmentDao.getDepartmentById(req.params.id);
        if (!dept) return res.status(404).json({ error: 'Department not found' });
        res.status(200).json(dept);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
const updateDepartment = async (req, res) => {
    try {
        const dept = await departmentDao.updateDepartment(req.params.id, req.body);
        if (!dept) return res.status(404).json({ error: 'Department not found' });
        res.status(200).json({ msg: 'Department updated' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
const deleteDepartment = async (req, res) => {
    try {
        const result = await departmentDao.deleteDepartment(req.params.id);
        if (!result) return res.status(404).json({ error: 'Department not found' });
        res.status(200).json({ msg: 'Department deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
module.exports = { createDepartment, getDepartments, getDepartmentById, updateDepartment, deleteDepartment };
