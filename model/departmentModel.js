const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/dbConnect');

const DepartmentModel = sequelize.define("Department", {
  department_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  department_name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  location: {
    type: DataTypes.STRING
  }
});

DepartmentModel.associate = (models) => {
  DepartmentModel.hasMany(models.Faculty, {
    foreignKey: "department_id"
  });
  DepartmentModel.hasMany(models.Student, {
    foreignKey: "department_id"
  });
};

module.exports = { DepartmentModel };
