const { EnrollmentModel } = require('../model/enrollmentModel');
const createEnrollment = async (data) => await EnrollmentModel.create(data);
const getAllEnrollments = async () => await EnrollmentModel.findAll();
const getEnrollmentById = async (id) => await EnrollmentModel.findByPk(id);
const updateEnrollment = async (id, data) => {
    const enrollment = await EnrollmentModel.findByPk(id);
    if (!enrollment) return null;
    return await enrollment.update(data);
};
const deleteEnrollment = async (id) => {
    const enrollment = await EnrollmentModel.findByPk(id);
    if (!enrollment) return null;
    return await enrollment.destroy();
};
module.exports = { createEnrollment, getAllEnrollments, getEnrollmentById, updateEnrollment, deleteEnrollment };
