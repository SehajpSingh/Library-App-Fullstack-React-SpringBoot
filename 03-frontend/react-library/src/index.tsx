import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';  // Importing App component
import './index.css';     // Global styles

ReactDOM.render(
  <React.StrictMode>
    <App />  // Mounting App component
  </React.StrictMode>,
  document.getElementById('root')  // Specifies where in the HTML to mount the App component
);
