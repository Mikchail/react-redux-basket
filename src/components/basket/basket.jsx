import React from 'react';
import './basket.scss';
const Basket = (props) => {
  const {basket,addToBasket,removeFromBasket,allRemoveFromBasket} = props;
  return (
    <div className="container">
      <ul className="basket-list">
        {basket.length ? (
          basket.map((good) => {
            const {img, price, quantity, name, id} = good;
            return (
              <li className="basket-list__item" key={good.id}>
                <h4 className="basket-list__title">{name}</h4>
                <img
                  className="basket-list__img"
                  width="100"
                  height="100"
                  src={`${img}`}
                  alt={`${name}`}
                />
                <p className="basket-list__quantity">in shop: {quantity}</p>
                <p className="basket-list__price">cosnt: {price}</p>
                <p className="basket-list__price">total: {good.total}</p>
                <div className="basket-list__item-wr">
                  <button className="basket-list__btn-minus" onClick={()=>removeFromBasket(good.id)}>-</button>
                  <p className="basket-list__count">{good.count}</p>
                  <button className="basket-list__btn-plus" onClick={()=>addToBasket(good.id)}>+</button>
                </div>
                <button onClick={()=>allRemoveFromBasket(good.id)}>delete</button>
              </li>
            );
          })
        ) : (
          <p>Empty</p>
        )}
      </ul>
    </div>
  );
};
export default Basket;
