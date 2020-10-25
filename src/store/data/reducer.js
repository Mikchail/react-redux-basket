import {extend} from '../../utils';

const ActionType = {
  GET_GOODS: `GET_GOODS`,
  LOAD_GOODS: `LOAD_GOODS`,
  ADD_TO_BASKET: `ADD_TO_BASKET`,
  REMOVE_FROM_BASKET: `REMOVE_FROM_BASKET`,
};
const initialState = {
  goods: [],
  isLoading: false,
  basket: [],
  totalCount: 0,
};

const ActionCreator = {
  loadGoods: (goods) => ({
    type: ActionType.LOAD_GOODS,
    payload: goods,
  }),
  addToBasket: (good) => ({
    type: ActionType.ADD_TO_BASKET,
    payload: good,
  }),
};
function addBasket(state, good, count) {
  const index = state.basket.findIndex((card) => {
    return card.id === good.id;
  });
  if (index === -1) {
    good.count = 1;
    return extend(state, {
      basket: state.basket.slice().concat([good]),
    });
  }
  good.count += count;
  return extend(state, {
    basket: state.basket.slice().concat([good]),
  });
}
function updateBasketItems(basket, item, index) {
  if (index === -1) {
    return basket.slice().concat([item]);
  }
  const newArray = basket.slice(0, index).concat([item], basket.slice(index + 1));
  console.log(newArray)
  return newArray;
}
function updateBasketItem(item, itemInBasket) {
  if (itemInBasket) {
    return {
      ...itemInBasket,
      count: itemInBasket.count + 1,
      price: item.price,
      total: itemInBasket.total + item.price,
    };
  }
  return {
    ...item,
    count: 1,
    total: item.price,
  };
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_GOODS:
      return extend(state, {goods: action.payload});
    case ActionType.LOAD_GOODS:
      return extend(state, {goods: action.payload, isLoading: true});
    case ActionType.REMOVE_FROM_BASKET:
      return extend(state, {
        user: action.payload,
      });
    case ActionType.ADD_TO_BASKET:
      const id = action.payload;
      const item = state.goods.find((good) => good.id === id);
      const index = state.basket.findIndex((b) => b.id === item.id);
      const itemInBasket = state.basket[index];
      const newItem = updateBasketItem(item, itemInBasket);
      console.log(index,itemInBasket);
      return extend(state, {
        basket: updateBasketItems(state.basket, newItem, index),
      });
    default:
      return state;
  }
};

export {reducer, ActionCreator};
