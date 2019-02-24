import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const container = document.getElementById('root');
// @ts-ignore
const components = window.__COMPONENTS__;

ReactDOM.render(<App components={components} />, container);
