import React from 'react';
import './basket.scss';
const Basket = (props) => {
  const {
    basket,
    addToBasket,
    removeFromBasket,
    allRemoveFromBasket,
    totalSum,
  } = props;
  return (
    <div className="container">
      {Boolean(totalSum) && (
        <p className="basket-total-sum">Total sum: {totalSum}</p>
      )}
      {basket.length ? (
        <ul className="basket-list">
          {basket.map((good) => {
            const {img, price, quantity, name, id, total, count} = good;
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
                  <p className="basket-list__quantity"><span className="span">in shop: </span>{quantity}</p>
                  <p className="basket-list__price"><span className="span">cosnt: </span>{price}</p>
                  <p className="basket-list__price"><span className="span">total: </span>{total}</p>
                </div>

                <div className="basket-list__item-wr">
                  <button
                    className="button basket-list__btn-minus"
                    onClick={() => removeFromBasket(id)}
                  >
                    -
                  </button>
                  <span className="basket-list__count">{count}</span>
                  <button
                    className="button basket-list__btn-plus"
                    onClick={() => addToBasket(id)}
                  >
                    +
                  </button>
                </div>
                <button
                  className="basket-list__button button"
                  onClick={() => allRemoveFromBasket(id)}
                >
                  <svg
                    width="23"
                    height="23"
                    viewBox="0 0 23 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.4025 22.404C2.60711 23.1986 1.36983 23.1986 0.574442 22.404C0.176748 22.0067 2.21936e-07 21.5211 2.45092e-07 20.9914C2.68249e-07 20.4616 0.176748 19.976 0.574443 19.5787L8.66089 11.5L0.574443 3.42128C0.176749 3.02397 1.0517e-06 2.53839 1.07485e-06 2.00864C1.09801e-06 1.47889 0.176749 0.993303 0.574443 0.59599C1.36983 -0.198636 2.60712 -0.198636 3.4025 0.59599L11.489 8.67465L19.5754 0.595991C20.3708 -0.198635 21.6081 -0.198635 22.4035 0.595991C23.1989 1.39062 23.1989 2.62666 22.4035 3.42128L14.317 11.5L22.4035 19.5787C23.1989 20.3733 23.1989 21.6094 22.4035 22.404C21.6081 23.1986 20.3708 23.1986 19.5754 22.404L11.489 14.3253L3.4025 22.404Z"
                      fill="#E31E25"
                    />
                  </svg>
                </button>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="basket-empty">Empty</p>
      )}
    </div>
  );
};

export default React.memo(Basket);
