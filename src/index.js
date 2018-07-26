import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';//
//import App from './App';
import Netflix from './Component/Netflix/Netflix';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Netflix />, document.getElementById('root'));
registerServiceWorker();
