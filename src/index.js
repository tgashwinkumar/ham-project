import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { react } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; 

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

const Home = () => {
  return (
    <div className = "home container">
      <motion.h2 animate = {{ fontSize: 50, color: "#ffffff", x: 100, y: 100}}>
        Hari, Ashwin, Manu
      </motion.h2>
    </div>
  )
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
