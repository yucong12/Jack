import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import router from "./router"
import 'antd/dist/antd.css';

ReactDOM.render(router, document.getElementById('root'));
registerServiceWorker();
