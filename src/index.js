import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '@app/components/App/App';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';

const element = document.getElementById('root');

if (!element) {
  throw new Error('Could not find element with id of `root`!');
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
