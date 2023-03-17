import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import My from './Components/Test1';
import Cls,{Day as Dy} from './Components/Test2';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <My/>
    <Cls/>
    <Dy/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
