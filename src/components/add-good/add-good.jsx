import React, {useState} from 'react';
const imgDedault =
  'https://icon-library.com/images/no-image-icon/no-image-icon-1.jpg';
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
        price:+price,
        quantity: +quantity,
        img: imgDedault,
      };
      addGood(newGood);
    }
  };
  return (
    <div className="container">
      <form onSubmit={handlerSubmit}>
        <label htmlFor="">
          <span>Title</span>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <label htmlFor="">
          <span>Price</span>
          <input
            type="text"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
        </label>
        <label htmlFor="">
          <span>Quantity</span>
          <input
            type="text"
            value={quantity}
            onChange={(event) => setQuantity(event.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default AddGood;
