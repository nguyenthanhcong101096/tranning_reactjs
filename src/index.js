import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './components/utils';
import registerServiceWorker from './registerServiceWorker';

import bugsnag from 'bugsnag-js';
import createPlugin from 'bugsnag-react';
const bugsnagClient = bugsnag('20890bfa4578112f7670584de38e0459')
const ErrorBoundary = bugsnagClient.use(createPlugin(React))

bugsnagClient.notify(new Error('Track bugs in Trainning ReactJs'))

ReactDOM.render(<ErrorBoundary><App /></ErrorBoundary>, document.getElementById('root'));
registerServiceWorker();
