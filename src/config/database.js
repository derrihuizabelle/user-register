require('dotenv').config();

module.exports = {
  development: {
    dialect: 'mysql',
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true,
    },
  },
  test: {
    dialect: 'mysql',
    host: process.env.TEST_DB_HOST,
    username: process.env.TEST_DB_USER,
    password: process.env.TEST_DB_PASSWORD,
    database: process.env.TEST_DB_NAME,
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true,
    },
  },
};
