import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {getGoods, getIsLoading} from '../../store/data/selector';
import {ActionCreator} from '../../store/data/reducer';

import Loading from '../loading/loading';
import Card from '../card/card';

import './shop.scss';

const Shop = (props) => {
  const {isLoading, goods, addToBasket, basket} = props;

  if (isLoading) {
    return <Loading />;
  }
  return (
    <ul className="card-list">
      {goods.map((good) => {
        const hasInBasket = basket.find((it) => it.id === good.id);
        return <Card good={good} hasInBasket={hasInBasket} key={good.id} addToBasket={addToBasket} />;
      })}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  goods: getGoods(state),
  isLoading: getIsLoading(state),
});
const mapDispatchToProps = (dispatch) => ({
  addToBasket: (id) => {
    dispatch(ActionCreator.addToBasket(id));
  },
});
Shop.propTypes = {
  isLoading: PropTypes.bool,
  goods: PropTypes.array,
};
export default connect(mapStateToProps, mapDispatchToProps)(Shop);
