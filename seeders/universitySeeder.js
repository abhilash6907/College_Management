const { UserModel } = require('../model/userModel');
const { StudentModel } = require('../model/studentModel');
const { FacultyModel } = require('../model/facultyModel');
const { SubjectModel } = require('../model/subjectModel');
const { CourseModel } = require('../model/courseModel');
const { DepartmentModel } = require('../model/departmentModel');
const { EnrollmentModel } = require('../model/enrollmentModel');
const { sequelize } = require('../config/dbConnect');

const seedData = async () => {
    try {
        await sequelize.sync({ force: false }); // Warning: This resets the database!
        console.log('Database synced for seeding.');

        // 1. Departments
        const departments = await DepartmentModel.bulkCreate([
            { department_name: 'Computer Science', location: 'Building A' },
            { department_name: 'Mathematics', location: 'Building B' },
            { department_name: 'Physics', location: 'Building C' }
        ]);
        console.log('Departments seeded.');

        // 2. Courses
        const courses = await CourseModel.bulkCreate([
            { course_name: 'B.Tech Computer Science', credits: 120 },
            { course_name: 'M.Sc Mathematics', credits: 80 }
        ]);
        console.log('Courses seeded.');

        // 3. Faculty
        const faculties = await FacultyModel.bulkCreate([
            { name: 'Dr. Alice Smith', department: 'Computer Science' },
            { name: 'Dr. Bob Johnson', department: 'Mathematics' }
        ]);
        console.log('Faculties seeded.');

        // 4. Students
        const students = await StudentModel.bulkCreate([
            { name: 'John Doe', course: 'B.Tech CS', year: 1 },
            { name: 'Jane Smith', course: 'B.Tech CS', year: 2 },
            { name: 'Sam Wilson', course: 'M.Sc Math', year: 1 }
        ]);
        console.log('Students seeded.');

        // 5. Subjects
        const subjects = await SubjectModel.bulkCreate([
            { subject_name: 'Data Structures' },
            { subject_name: 'Algorithms' },
            { subject_name: 'Linear Algebra' }
        ]);
        console.log('Subjects seeded.');

        // 6. Users (Auth system)
        await UserModel.bulkCreate([
            { firstName: 'Admin', lastName: 'User', email: 'admin@uni.com', age: 30, mobileNumber: '1234567890', isActive: true }
        ]);
        console.log('Users seeded.');

        console.log('All data seeded successfully!');
        process.exit(0);
    } catch (error) {
        console.error('Error seeding data:', error);
        process.exit(1);
    }
};

seedData();
