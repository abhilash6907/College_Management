const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/dbConnect');

const EnrollmentModel = sequelize.define("Enrollment", {
  enrollment_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  enrollment_date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  grade: {
    type: DataTypes.STRING(2)
  }
});

EnrollmentModel.associate = (models) => {
  EnrollmentModel.belongsTo(models.Student, {
    foreignKey: "student_id"
  });
  EnrollmentModel.belongsTo(models.Subject, {
    foreignKey: "subject_id"
  });
};

module.exports = { EnrollmentModel };
