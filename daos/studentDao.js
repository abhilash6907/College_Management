const { StudentModel } = require('../model/studentModel');

const createStudent = async (data) => await StudentModel.create(data);
const getAllStudents = async () => await StudentModel.findAll();
const getStudentById = async (id) => await StudentModel.findByPk(id);
const updateStudent = async (id, data) => {
    const student = await StudentModel.findByPk(id);
    if (!student) return null;
    return await student.update(data);
};
const deleteStudent = async (id) => {
    const student = await StudentModel.findByPk(id);
    if (!student) return null;
    return await student.destroy();
};

module.exports = { createStudent, getAllStudents, getStudentById, updateStudent, deleteStudent };
