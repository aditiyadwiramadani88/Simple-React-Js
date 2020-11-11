import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css'
import * as serviceWorker from './serviceWorker';
import App from './layout/headers';



ReactDOM.render(
<div>
  <App />
</div>,  
document.getElementById('root')
)
serviceWorker.unregister();
