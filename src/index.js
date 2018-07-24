import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import RandomUser from './Component/RandomUser/RandomUser';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<RandomUser />, document.getElementById('root'));
registerServiceWorker();
