const { DepartmentModel } = require('../model/departmentModel');
const createDepartment = async (data) => await DepartmentModel.create(data);
const getAllDepartments = async () => await DepartmentModel.findAll();
const getDepartmentById = async (id) => await DepartmentModel.findByPk(id);
const updateDepartment = async (id, data) => {
    const dept = await DepartmentModel.findByPk(id);
    if (!dept) return null;
    return await dept.update(data);
};
const deleteDepartment = async (id) => {
    const dept = await DepartmentModel.findByPk(id);
    if (!dept) return null;
    return await dept.destroy();
};
module.exports = { createDepartment, getAllDepartments, getDepartmentById, updateDepartment, deleteDepartment };
