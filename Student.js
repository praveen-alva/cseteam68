const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Course = require('./Course');

const Student = sequelize.define('Student', {
    name: DataTypes.STRING,
    email: DataTypes.STRING
});

// Relationships
Student.belongsToMany(Course, { through: 'StudentCourses' });

module.exports = Student;