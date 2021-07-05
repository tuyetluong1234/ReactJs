import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Hello from './components/Hello';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('main_content')
);

reportWebVitals();
