const express = require('express');
const { dbConnection } = require('./config/dbConnect.js');

// Routes
const userRoute = require('./routes/userRoute.js');
const studentRoute = require('./routes/studentRoute.js');
const facultyRoute = require('./routes/facultyRoute.js');
const subjectRoute = require('./routes/subjectRoute.js');
const enrollmentRoute = require('./routes/enrollmentRoute.js');
const departmentRoute = require('./routes/departmentRoute.js');
const courseRoute = require('./routes/courseRoute.js');

// Models for sync
const { UserModel } = require('./model/userModel.js')
const { StudentModel } = require('./model/studentModel.js')
const { FacultyModel } = require('./model/facultyModel.js')
const { SubjectModel } = require('./model/subjectModel.js')
const { EnrollmentModel } = require('./model/enrollmentModel.js')
const { DepartmentModel } = require('./model/departmentModel.js')
const { CourseModel } = require('./model/courseModel.js')

const app = express();
app.use(express.json());

// Register Routes
app.use('/users', userRoute);
app.use('/students', studentRoute);
app.use('/faculties', facultyRoute);
app.use('/subjects', subjectRoute);
app.use('/enrollments', enrollmentRoute);
app.use('/departments', departmentRoute);
app.use('/courses', courseRoute);

UserModel.sync({ force: false })
StudentModel.sync({ force: false })
FacultyModel.sync({ force: false })
SubjectModel.sync({ force: false })
EnrollmentModel.sync({ force: false })
DepartmentModel.sync({ force: false })
CourseModel.sync({ force: false })

app.listen(4000, async () => {
    console.log('Server is listening at port: 4000');
    await dbConnection();
});



