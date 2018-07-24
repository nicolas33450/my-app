import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Compteur2 from './Component/Compteur2/Compteur2';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Compteur2 />, document.getElementById('root'));
registerServiceWorker();
