import { createStore, compose, applyMiddleware } from 'redux';
import { wrapStore } from 'react-chrome-redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers/root';

const middleware = [thunk, logger];

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(...middleware)
    )
);

wrapStore(store, {
  portName: 'TEST'
});
