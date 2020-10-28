import React, {useState} from 'react';

import {apiService as api} from '../../api';
import './add-good.scss';
const imgDedault = 'http://pngimg.com/uploads/guitar/guitar_PNG3341.png';
// 'https://icon-library.com/images/no-image-icon/no-image-icon-1.jpg';

const AddGood = (props) => {
  const {addGood} = props;

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const handlerSubmit = (event) => {
    event.preventDefault();
    if (name && price && quantity) {
      const id = Math.random().toString(16).slice(2);
      const newGood = {
        id,
        name,
        price: +price,
        quantity: +quantity,
        img: imgDedault,
      };
      api.post(newGood);
      addGood(newGood);
      setName('');
      setPrice('');
      setQuantity('');
    }
  };
  return (
    <div className="add-good">
      <div className="container">
        <form className="add-good__form" onSubmit={handlerSubmit}>
          <label htmlFor="">
            <span className="span">Title: </span>
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </label>
          <label htmlFor="">
            <span className="span">Price:</span>
            <input
              type="text"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
            />
          </label>
          <label htmlFor="">
            <span className="span">Quantity: </span>
            <input
              type="text"
              value={quantity}
              onChange={(event) => setQuantity(event.target.value)}
            />
          </label>
          <button className="button" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};
export default AddGood;
