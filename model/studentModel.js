const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/dbConnect');

const StudentModel = sequelize.define("Student", {
  student_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  course: {
    type: DataTypes.STRING
  },
  year: {
    type: DataTypes.INTEGER
  }
});

// Setting up association method if needed in future
StudentModel.associate = (models) => {
  StudentModel.hasMany(models.Enrollment, {
    foreignKey: "student_id"
  });
};

module.exports = { StudentModel };
