import NameSpace from '../name-space';

const getIsLoading = (state) => {
  return state[NameSpace.DATA].isLoading;
};
const getBasket = (state) => {
  return state[NameSpace.DATA].basket;
};
const getTotalSum = (state) => {
  const basket = getBasket(state);
  let total = basket.reduce((acc,it) =>acc + it.total,0);
  return total
};
const getGoods = (state) => {
  return state[NameSpace.DATA].goods;
};

export {getIsLoading,getTotalSum, getGoods, getBasket};
