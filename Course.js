const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Teacher = require('./Teacher');

const Course = sequelize.define('Course', {
    title: DataTypes.STRING,
    description: DataTypes.STRING
});

// Relationships
Course.belongsTo(Teacher);

module.exports = Course;