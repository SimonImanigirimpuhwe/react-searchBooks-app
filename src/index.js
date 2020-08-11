import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './container/App';
import ErrorBoundry from './component/ErrorBoundry';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundry>
      <App />
    </ErrorBoundry>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
