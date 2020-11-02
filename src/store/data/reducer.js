import {extend} from '../../utils';
import {apiService as api} from '../../api';
const ActionType = {
  GET_GOODS: `GET_GOODS`,
  ADD_GOODS: `ADD_GOODS`,
  LOAD_GOODS: `LOAD_GOODS`,
  IS_LOADING_GOODS: `IS_LOADING_GOODS`,
  LOAD_GOODS_ERROR: `LOAD_GOODS_ERROR`,
  ADD_TO_BASKET: `ADD_TO_BASKET`,
  REMOVE_FROM_BASKET: `REMOVE_FROM_BASKET`,
  ALL_GOODS_REMOVED_FROM_CART: `ALL_GOODS_REMOVED_FROM_CART`,
};
const initialState = {
  goods: [],
  isLoading: true,
  isLoadingError: false,
  basket: [],
  totalCount: 0,
};

const ActionCreator = {
  loadGoods: (goods) => ({
    type: ActionType.LOAD_GOODS,
    payload: goods,
  }),
  loadGoodsError: (flag) => ({
    type: ActionType.LOAD_GOODS_ERROR,
    payload: flag,
  }),
  isLoadingGoods: (flag) => ({
    type: ActionType.IS_LOADING_GOODS,
    payload: flag,
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

const Operations = {
  loadFilms: () => (dispatch, getState, api) => {
    return api
      .get()
      .then((responce) => {
        let newGoods = Object.values(responce).map((it) => it);
        dispatch(ActionCreator.loadGoods(newGoods));
        dispatch(ActionCreator.isLoadingGoods(false));
      })
      .catch((err) => {
        dispatch(ActionCreator.loadGoodsError(true));
      });
  },
};

function updateBasketItems(basket, item, index) {
  if (item.count === 0) {
    const newArray = basket.slice(0, index).concat(basket.slice(index + 1));
    return newArray;
  }

  if (index === -1) {
    return [].concat([item]).concat(basket.slice());
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

  if (amount > 0 && itemInBasket && itemInBasket.count >= newItem.quantity) {
    return state;
  }
  return extend(state, {
    basket: updateBasketItems(state.basket, newItem, index),
  });
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ADD_GOODS:
      return extend(state, {goods: [...state.goods, action.payload]});
    case ActionType.LOAD_GOODS:
      return extend(state, {
        goods: [...state.goods, ...action.payload],
      });
    case ActionType.IS_LOADING_GOODS:
      return extend(state, {
        isLoading: action.payload,
      });
    case ActionType.REMOVE_FROM_BASKET:
      return updateBasket(state, action.payload, -1);
    case ActionType.ADD_TO_BASKET:
      return updateBasket(state, action.payload, +1);
    case ActionType.LOAD_GOODS_ERROR:
      return extend(state, {
        isLoadingError: action.payload,
      });
    case ActionType.ALL_GOODS_REMOVED_FROM_CART:
      const item = state.basket.find(({id}) => id === action.payload);
      return updateBasket(state, action.payload, -item.count);
    default:
      return state;
  }
};

export {reducer, ActionCreator, Operations,ActionType};
