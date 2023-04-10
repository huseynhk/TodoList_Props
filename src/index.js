import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { FunctionProvider } from "./components/Task";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FunctionProvider>
    <App />
  </FunctionProvider>
);


