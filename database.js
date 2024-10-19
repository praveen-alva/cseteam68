const { Sequelize } = require('sequelize');

// Use SQLite for simplicity
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite'
});

module.exports = sequelize;