import React, {useState} from 'react';

import {apiService as api} from '../../api';
import './add-good.scss';
const imgDedault = 'http://pngimg.com/uploads/guitar/guitar_PNG3341.png';
const bass = 'http://pngimg.com/uploads/guitar/guitar_PNG3356.png';
const electro = 'http://pngimg.com/uploads/guitar/guitar_PNG3346.png';
const acoustic = 'http://pngimg.com/uploads/guitar/guitar_PNG3351.png';
// 'https://icon-library.com/images/no-image-icon/no-image-icon-1.jpg';

const AddGood = (props) => {
  const {addGood,history} = props;
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [img, setImg] = useState('');
  const handlerSubmit = (event) => {
    event.preventDefault();

    if (name && price && quantity) {
      const id = Math.random().toString(16).slice(2);
      const newGood = {
        id,
        name,
        price: +price,
        quantity: +quantity,
        img: img,
      };
      api.post(newGood);
      addGood(newGood);
      setName('');
      setPrice('');
      setQuantity('');
      setImg('');
      history.push('/')
    }
  };
  return (
    <div className="add-good">
      <div className="container">
        <h2 className="add-good__title">Add new guitar</h2>

        <form className="add-good__form add-form" onSubmit={handlerSubmit}>
          <fieldset>
            <label className="add-form__label" htmlFor="">
              <span className="span">Title: </span>
              <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </label>
            <label className="add-form__label" htmlFor="">
              <span className="span">Price:</span>
              <input
                type="number"
                value={price}
                onChange={(event) => setPrice(event.target.value)}
              />
            </label>
            <label className="add-form__label" htmlFor="">
              <span className="span">Quantity: </span>
              <input
                type="number"
                value={quantity}
                onChange={(event) => setQuantity(event.target.value)}
              />
            </label>
          </fieldset>
          <fieldset className="add-form__imgs">
            <div className="add-form__imgs-wrap">
            <label >
              <input defaultChecked  onChange={() => setImg(bass)} type="radio" name="img" />
              <img src={`${bass}`} alt=""/>
              <span>Bass</span>
            </label>
            <label>
              <input  onChange={() => setImg(electro)} type="radio" name="img" />
              <img src={`${electro}`} alt=""/>
              <span>Electro</span>
            </label>
            <label >
              <input  onChange={() => setImg(acoustic)} type="radio" name="img" />
              <img src={`${acoustic}`} alt=""/>
              <span>Acoustic</span>
            </label>
            </div>
          </fieldset>
          <button className="button" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};
export default AddGood;
