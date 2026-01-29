const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/dbConnect');

const FacultyModel = sequelize.define("Faculty", {
  faculty_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  department: {
    type: DataTypes.STRING
  }
});

FacultyModel.associate = (models) => {
  FacultyModel.hasMany(models.Subject, {
    foreignKey: "faculty_id"
  });
};

module.exports = { FacultyModel };
