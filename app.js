const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config/database');
const courseRoutes = require('./routes/courses');
const teacherRoutes = require('./routes/teachers');
const studentRoutes = require('./routes/students');
sequelize.sync({ force: false })
    .then(() => {
        console.log('Database connected and synchronized');
    })
    .catch(err => console.error('Failed to connect to the database:', err));















// Initialize the app
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/courses', courseRoutes);
app.use('/api/teachers', teacherRoutes);
app.use('/api/students', studentRoutes);

// Database connection
sequelize.sync()
    .then(result => {
        console.log("Database connected");
    })
    .catch(err => console.log(err));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('Server is running on port ${PORT}');
});