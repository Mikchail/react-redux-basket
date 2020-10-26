import React from 'react';
import './singin.scss';

const Signin = (props) => {
  const {value, changeValue, addUser} = props;
  const handlerSubmit = (event) =>{
    event.preventDefault();
    addUser(value)
  }
  const handlerChange= (event)=>{
    event.preventDefault();
    changeValue(event.target.value)
  }
  return (
    <div>
      <h1>Signin</h1>
      <form onSubmit={handlerSubmit}>
        <h3>Enter your name</h3>
        <input onChange={handlerChange} type="text" value={value}/>
      </form>
    </div>
  );
};

export default Signin;
