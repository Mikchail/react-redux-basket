import React from 'react';
import './basket.scss';
const Basket = (props) => {
  const {basket,addToBasket,removeFromBasket,allRemoveFromBasket,totalSum} = props;
  return (
    <div className="container">
      <ul className="basket-list">
        <p>{totalSum}</p>
        {basket.length ? (
          basket.map((good) => {
            const {img, price, quantity, name, id,total,count} = good;
            return (
              <li className="basket-list__item" key={id}>
                <img
                  className="basket-list__img"
                  width="100"
                  height="100"
                  src={`${img}`}
                  alt={`${name}`}
                />
                <div className="basket-list__item-inner-wr">
                  <h4 className="basket-list__title">{name}</h4>
                  <p className="basket-list__quantity">in shop: {quantity}</p>
                  <p className="basket-list__price">cosnt: {price}</p>
                  <p className="basket-list__price">total: {total}</p>
                </div>

                <div className="basket-list__item-wr">
                  <button className="button basket-list__btn-minus" onClick={()=>removeFromBasket(id)}>-</button>
                    <span className="basket-list__count">{count}</span>
                  <button className="button basket-list__btn-plus" onClick={()=>addToBasket(id)}>+</button>
                </div>
                <button className="button" onClick={()=>allRemoveFromBasket(id)}>delete</button>
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
