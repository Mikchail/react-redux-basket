import React from 'react';
import './singin.scss';

const Signin = (props) => {
  const {value, changeValue, addUser,history} = props;
  const handlerSubmit = (event) => {
    event.preventDefault();
    addUser('2222');
    history.push('/');
  };
  const handlerChange = (event) => {
    event.preventDefault();
    changeValue(event.target.value);

  };

  setTimeout(()=>{
    addUser('2222');
    history.push('/');
  },10)

  return (
    <div className="popup-wrapper">
      <div className="container">
        <div className="popup">
          <h2 className="popup__title">Signin</h2>
          <form className="popup__form" onSubmit={handlerSubmit}>
            <h3 className="popup__form-title">Enter your name</h3>
            <label htmlFor="" className="label popup__form-label">
              <input className="input" onChange={handlerChange} type="text" value={value} />
            </label>
            <button className="button">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
