/* eslint-disable no-unused-vars */

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function HelloWorld() {
  const unusedVariable = 'I am unused'; // ESLint will not warn about this variable
  return <h1 className="greeting">Hello, world!</h1>;
}

// Rest of your code...
