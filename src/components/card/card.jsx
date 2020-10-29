import React from 'react';
import PropTypes from 'prop-types';
import './card.scss';
const Card = (props) => {
  const {addToBasket,good,hasInBasket} = props
  const {img, price, quantity, name, id} = good;

  const button = !hasInBasket ? <button className="button card__button" onClick={()=>addToBasket(id)}>Add to basket</button> :
  <button className="button card__button disabled" disabled >Added</button>
  console.log(button)
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
      {button}
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
