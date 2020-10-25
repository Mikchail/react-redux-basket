import NameSpace from '../name-space';

const getIsLoading = (state) => {
  return state[NameSpace.DATA].isLoading;
};
const getBasket = (state) => {
  return state[NameSpace.DATA].basket;
};

const getGoods = (state) => {
  return state[NameSpace.DATA].goods;
};
const getTags = (state) => {
  const films = state[NameSpace.DATA].films;
  const tags = films.map((f) => {
     return f.genre;
  });
  return [...new Set(tags)]
};
export {getIsLoading, getGoods, getTags,getBasket};
