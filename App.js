import React from 'react';
import Courses from './components/Courses';
import Teachers from './components/Teachers';
import Students from './components/Students';

const App = () => {
    return (
        <div className="App">
            <h1>Course Selection and Teacher Assignment System</h1>
            <Courses />
            <Teachers />
            <Students />
        </div>
    );
};

export default App;
