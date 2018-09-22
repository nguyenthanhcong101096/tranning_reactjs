import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './components/utils';
import registerServiceWorker from './registerServiceWorker';

// track bugs
import bugsnag from 'bugsnag-js';
import createPlugin from 'bugsnag-react';

// add redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import myReducer from './components/redux/reducers/index';

const bugsnagClient = bugsnag('20890bfa4578112f7670584de38e0459')
const ErrorBoundary = bugsnagClient.use(createPlugin(React))
bugsnagClient.notify(new Error('Track bugs in Trainning ReactJs'))

const store = createStore(myReducer)

ReactDOM.render(
  <ErrorBoundary>
    <Provider store={store}>
      <App />
    </Provider>
  </ErrorBoundary>,
  document.getElementById('root')
);
registerServiceWorker();
