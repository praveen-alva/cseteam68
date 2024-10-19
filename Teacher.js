const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Teacher = sequelize.define('Teacher', {
    name: DataTypes.STRING,
    background: DataTypes.STRING,
    rating: DataTypes.FLOAT,
    research: DataTypes.STRING,
    patents: DataTypes.STRING
});

module.exports = Teacher;