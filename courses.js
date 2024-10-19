const express = require('express');
const router = express.Router();
const Course = require('../models/Course');

// Get all courses
router.get('/', async (req, res) => {
    const courses = await Course.findAll();
    res.json(courses);
});

// Add a new course
router.post('/', async (req, res) => {
    const { title, description, TeacherId } = req.body;
    const course = await Course.create({ title, description, TeacherId });
    res.json(course);
});

module.exports = router;