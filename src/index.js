import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Devine from './Component/Devine/Devine';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Devine />, document.getElementById('root'));
registerServiceWorker();
