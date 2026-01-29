const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/dbConnect');

const SubjectModel = sequelize.define("Subject", {
  subject_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  subject_name: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

SubjectModel.associate = (models) => {
  SubjectModel.belongsTo(models.Faculty, {
    foreignKey: "faculty_id"
  });

  SubjectModel.hasMany(models.Enrollment, {
    foreignKey: "subject_id"
  });
};

module.exports = { SubjectModel };
