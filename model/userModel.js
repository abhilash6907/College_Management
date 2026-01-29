const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/dbConnect');

const UserModel = sequelize.define('user', {
  firstName: DataTypes.STRING,
  lastName: DataTypes.STRING,
  email: DataTypes.STRING,
  age: DataTypes.INTEGER,
  mobileNumber: {
    type: DataTypes.STRING,   // 👈 FIX
    allowNull: false
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
}, {
  freezeTableName: true
});


module.exports = { UserModel };
