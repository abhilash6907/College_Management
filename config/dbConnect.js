const { Sequelize } = require( "sequelize");

const sequelize = new Sequelize("postgres", "postgres", "ABHILASH", {
  host: "127.0.0.1",
  port: 3000,
  dialect: "postgres",
  logging: false
});

const dbConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("PostgreSQL connected successfully");
   //  await sequelize.sync();
  } catch (error) {
    console.error(error);
  }
};

module.exports = { dbConnection, sequelize };
