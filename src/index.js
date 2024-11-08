import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// 기본 개발자 도구 들어가면 VirtualDom 과 관련된 내용 띄어주고 아무튼 이런 저런 역할 하는걸로 이해하고 있음.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
