const { Sequelize } = require('sequelize'); // Import Sequelize

const sequelize = new Sequelize('database_name', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
