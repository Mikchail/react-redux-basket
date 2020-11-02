import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createStore, applyMiddleware, compose} from 'redux';

import {Operations, ActionCreator} from './store/data/reducer';
import rootReducer from './store/root-reducer';
import {apiService as api} from './api';
import App from './components/app/app';
import './index.scss';

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk.withExtraArgument(api)), composeWithDevTools())
);

store.dispatch(Operations.loadFilms());

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector(`#root`)
);
