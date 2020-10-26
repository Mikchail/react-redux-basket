import {extend} from '../../utils';

const ActionType = {
  GET_GOODS: `GET_GOODS`,
  ADD_GOODS: `ADD_GOODS`,
  LOAD_GOODS: `LOAD_GOODS`,
  ADD_TO_BASKET: `ADD_TO_BASKET`,
  REMOVE_FROM_BASKET: `REMOVE_FROM_BASKET`,
  ALL_GOODS_REMOVED_FROM_CART: `ALL_GOODS_REMOVED_FROM_CART`,
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
  addGood: (id) => ({
    type: ActionType.ADD_GOODS,
    payload: id,
  }),
  addToBasket: (id) => ({
    type: ActionType.ADD_TO_BASKET,
    payload: id,
  }),
  removeFromBasket: (id) => ({
    type: ActionType.REMOVE_FROM_BASKET,
    payload: id,
  }),
  allRemoveFromBasket: (id) => ({
    type: ActionType.ALL_GOODS_REMOVED_FROM_CART,
    payload: id,
  }),
};

function updateBasketItems(basket, item, index) {
  if (item.count === 0) {
    const newArray = basket.slice(0, index).concat(basket.slice(index + 1));
    return newArray;
  }
  if (index === -1) {
    return basket.slice().concat([item]);
  }

  const newArray = basket
    .slice(0, index)
    .concat([item], basket.slice(index + 1));
  return newArray;
}

function updateBasketItem(item, itemInBasket, amount) {
  if (itemInBasket) {
    return {
      ...itemInBasket,
      count: itemInBasket.count + amount,
      price: item.price,
      total: itemInBasket.total + item.price * amount,
    };
  }
  return {
    ...item,
    count: 1,
    total: item.price,
  };
}

function updateBasket(state, id, amount) {
  const item = state.goods.find((good) => good.id === id);
  const index = state.basket.findIndex((b) => b.id === item.id);
  const itemInBasket = state.basket[index];
  const newItem = updateBasketItem(item, itemInBasket, amount);
  return extend(state, {
    basket: updateBasketItems(state.basket, newItem, index),
  });
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ADD_GOODS:
      return extend(state, {goods: [...state.goods, action.payload]});
    case ActionType.LOAD_GOODS:
      return extend(state, {goods: action.payload, isLoading: true});
    case ActionType.REMOVE_FROM_BASKET:
      return updateBasket(state, action.payload, -1);
    case ActionType.ADD_TO_BASKET:
      return updateBasket(state, action.payload, +1);
    case ActionType.ALL_GOODS_REMOVED_FROM_CART:
      const item = state.basket.find(({id}) => id === action.payload);
      return updateBasket(state, action.payload, -item.count);
    default:
      return state;
  }
};

export {reducer, ActionCreator};
