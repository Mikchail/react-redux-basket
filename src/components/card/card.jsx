import React from 'react';
import PropTypes from 'prop-types';
import './card.scss';
const Card = (props) => {
  const {addToBasket,good} = props
  const {img, price, quantity, name, id} = good;
  return (
    <li className="card">
      <h4 className="card__title">{name}</h4>
      <img
        className="card__img"
        width="300"
        height="400"
        src={`${img}`}
        alt={`${name}`}
      />
      <p className="card__quantity"><span className="span">Quantity: </span>{quantity}</p>
      <p className="card__price"><span className="span">Price: </span>{price}</p>
      <button className="button card__button" onClick={()=>addToBasket(good.id)}>Добавить в корзину</button>
    </li>
  );
};

Card.propTypes = {
  good: PropTypes.shape({
    img: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};

export default Card;
