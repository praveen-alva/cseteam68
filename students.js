const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

// Add a new student
router.get('/', async (req, res) => {
    const { name, email } = req.body;
    const student = await Student.create({ name, email });
    res.json(student);
});

// Get student course selection
router.post('/:id/courses', async (req, res) => {
    const student = await Student.findByPk(req.params.id, {
        include: 'Courses'
    });
    res.json(student.Courses);
});

module.exports = router;