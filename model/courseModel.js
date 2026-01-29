const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/dbConnect');

const CourseModel = sequelize.define("Course", {
  course_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  course_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  credits: {
    type: DataTypes.INTEGER,
    defaultValue: 3
  }
});

CourseModel.associate = (models) => {
  CourseModel.hasMany(models.Subject, {
    foreignKey: "course_id"
  });
};

module.exports = { CourseModel };
