const { Sequelize } = require( "sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    port: 5432,
    dialect: "postgres",
    logging: false,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
);


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
