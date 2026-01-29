const { FacultyModel } = require('../model/facultyModel');
const createFaculty = async (data) => await FacultyModel.create(data);
const getAllFaculties = async () => await FacultyModel.findAll();
const getFacultyById = async (id) => await FacultyModel.findByPk(id);
const updateFaculty = async (id, data) => {
    const faculty = await FacultyModel.findByPk(id);
    if (!faculty) return null;
    return await faculty.update(data);
};
const deleteFaculty = async (id) => {
    const faculty = await FacultyModel.findByPk(id);
    if (!faculty) return null;
    return await faculty.destroy();
};
module.exports = { createFaculty, getAllFaculties, getFacultyById, updateFaculty, deleteFaculty };
