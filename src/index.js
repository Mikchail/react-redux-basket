import React from 'react';
import ReactDom from 'react-dom';
import thunk from 'redux-thunk';
import {apiService as api} from './api';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './store/root-reducer';
import {createStore, applyMiddleware, compose} from 'redux';
import {ActionCreator} from './store/data/reducer';
import {Provider} from 'react-redux';
import {goods} from '../mocks/goods';
import App from './components/app/app';
console.log(api);
import './index.scss';




const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk.withExtraArgument(api)), composeWithDevTools())
);

setTimeout(() => {
  console.log(api.fetchPosts());
  store.dispatch(ActionCreator.loadGoods(goods));
}, 1000);

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector(`#root`)
);
