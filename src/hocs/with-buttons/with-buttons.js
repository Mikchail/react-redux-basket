import React, {useState} from 'react';
import {ActionCreator} from '../../store/user/reducer';
import {connect} from 'react-redux';

const withValue = (Component) => {
  const WithValue = (props) => {
    const [value, setValue] = useState('');

    return (
      <Component {...props} value={value} changeValue={setValue} addUser={props.addUser}>
        {props.children}
      </Component>
    );
  };
  const mapDispatchToProps = (dispatch) => ({
    addUser(name) {
      dispatch(ActionCreator.addUser(name));
    },
  });
  return connect(null, mapDispatchToProps)(WithValue);
};

export default withValue;
