import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import Gouv from './Component/Gouv/Gouv';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Gouv />, document.getElementById('root'));
registerServiceWorker();
