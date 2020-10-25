import React from 'react';
import ReactDom from 'react-dom';
import {composeWithDevTools} from 'redux-devtools-extension';
import reducer from './store/reducer';
import {createStore} from 'redux';
import {ActionCreator} from './store/data/reducer';
import {Provider} from 'react-redux';
import {goods} from '../mocks/goods';
import App from './components/app/app';

import './index.scss';

const store = createStore(reducer, composeWithDevTools());
console.log(goods)
setTimeout(() => {
  store.dispatch(ActionCreator.loadGoods(goods));
}, 1000);

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector(`#root`)
);
