const { CourseModel } = require('../model/courseModel');
const createCourse = async (data) => await CourseModel.create(data);
const getAllCourses = async () => await CourseModel.findAll();
const getCourseById = async (id) => await CourseModel.findByPk(id);
const updateCourse = async (id, data) => {
    const course = await CourseModel.findByPk(id);
    if (!course) return null;
    return await course.update(data);
};
const deleteCourse = async (id) => {
    const course = await CourseModel.findByPk(id);
    if (!course) return null;
    return await course.destroy();
};
module.exports = { createCourse, getAllCourses, getCourseById, updateCourse, deleteCourse };
