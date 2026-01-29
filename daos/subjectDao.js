const { SubjectModel } = require('../model/subjectModel');
const createSubject = async (data) => await SubjectModel.create(data);
const getAllSubjects = async () => await SubjectModel.findAll();
const getSubjectById = async (id) => await SubjectModel.findByPk(id);
const updateSubject = async (id, data) => {
    const subject = await SubjectModel.findByPk(id);
    if (!subject) return null;
    return await subject.update(data);
};
const deleteSubject = async (id) => {
    const subject = await SubjectModel.findByPk(id);
    if (!subject) return null;
    return await subject.destroy();
};
module.exports = { createSubject, getAllSubjects, getSubjectById, updateSubject, deleteSubject };
