import NameSpace from '../name-space';
import {createSelector} from 'reselect';

const getIsLoading = (state) => {
  return state[NameSpace.DATA].isLoading;
};

const getBasket = (state) => {
  return state[NameSpace.DATA].basket;
};

const getBasketSelect = createSelector(getBasket, (it)=>it);
const getBasketSelectLength = createSelector(getBasket, (it)=>it.length);
const getTotalSum = (state) => {
  const basket = getBasket(state);
  let total = basket.reduce((acc, it) => acc + it.total, 0);
  return total;
};
const getGoods = (state) => {
  return state[NameSpace.DATA].goods;
};

export {getIsLoading, getTotalSum, getGoods, getBasket, getBasketSelect,getBasketSelectLength};
