import React from 'react';
import ReactDom from 'react-dom';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createStore, applyMiddleware, compose} from 'redux';

import {Operations} from './store/data/reducer'
import rootReducer from './store/root-reducer';
import {apiService as api} from './api';
import {ActionCreator} from './store/data/reducer';
import {Provider} from 'react-redux';
import {goods} from '../mocks/goods';
import App from './components/app/app';
import './index.scss';

console.log();


const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk.withExtraArgument(api)), composeWithDevTools())
);

setTimeout(() => {
  store.dispatch(Operations.loadFilms())
}, 1000);

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector(`#root`)
);
