import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card/card';
import {getGoods, getIsLoading} from '../../store/data/selector';
import {ActionCreator} from '../../store/data/reducer';
import {connect} from 'react-redux';
import './shop.scss';
const Shop = (props) => {
  const {isLoading, goods,addToBasket} = props;
  console.log(isLoading);
  return (
    <ul className="card-list">
      {isLoading &&
        goods &&
        goods.map((good) => {
          return <Card good={good} key={good.id} addToBasket={addToBasket} />;
        })}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  goods: getGoods(state),
  isLoading: getIsLoading(state),
});
const mapDispatchToProps = (dispatch) => ({
  addToBasket: (id)=>{
    dispatch(ActionCreator.addToBasket(id))
  }
})
Shop.propTypes = {
  isLoading: PropTypes.bool,
  goods: PropTypes.array,
};
export default connect(mapStateToProps,mapDispatchToProps)(Shop);
