import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Store } from 'react-chrome-redux';
import App from './components/app/App';
import '../../styles/index.css';

const mountNode = document.createElement('div');
document.body.appendChild(mountNode);
mountNode.setAttribute('id', 'root');

const store = new Store({
  portName: 'TEST',
});

store.ready().then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
});
