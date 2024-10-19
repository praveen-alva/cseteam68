const express = require('express');
const router = express.Router();
const Teacher = require('../models/Teacher');

// Get all teachers
router.get('/', async (req, res) => {
    const teachers = await Teacher.findAll();
    res.json(teachers);
});

// Add a new teacher
router.post('/', async (req, res) => {
    const { name, background, rating, research, patents } = req.body;
    const teacher = await Teacher.create({ name, background, rating, research, patents });
    res.json(teacher);
});

module.exports = router;