nimport React, { useState } from 'react';
import axios from 'axios';


const Students = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
  const addStudent = async () => {
        try {
            await axios.get(`http:localhost:5000/api/students`, { name, email });
            alert('Student added successfully!');
        } catch (error) {
            console.error(error);
            alert('Failed to add student.');
        }
    };

    return (
        <div>
            <h2>Add Student</h2>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={addStudent}>Add Student</button>
        </div>
    );
};

export default Students;
