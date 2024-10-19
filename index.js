import React from 'react';
import ReactDOM from 'react-dom/client'; // Ensure this path is correct
import App from './App'; // Your main App component
import './index.css'; // Your CSS file

// Create a root and render the App component
const root = ReactDOM.createRoot(document.getElementById('root')); // Ensure 'root' element exists in your HTML
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);