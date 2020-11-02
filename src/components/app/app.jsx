import React from 'react';
import {Router as BrowserRouter, Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';

import {
  getBasket,
  getTotalSum,
  getBasketSelectLength,
} from '../../store/data/selector';
import {ActionCreator} from '../../store/data/reducer';
import history from '../../history';
import Singin from '../signin/signin';
import Header from '../header/header';
import Footer from '../footer/footer';
import Basket from '../basket/basket';
import Shop from '../shop/shop';
import PrivateRoute from '../privite-router/privite-router';
import AddGood from '../add-good/add-good';
import withValue from '../../hocs/with-value/with-value';

const SinginWithValue = withValue(Singin);

import './app.scss';
const App = (props) => {
  const {
    basket,
    addToBasket,
    removeFromBasket,
    addGood,
    allRemoveFromBasket,
    totalSum,
    basketLength,
  } = props;
  return (
    <div className="wrapper">
      <BrowserRouter history={history}>
        <Header basketLength={basketLength} />
        <main className="main">
          <Switch>
            <PrivateRoute
              exact
              path="/"
              render={() => {
                return (
                  <div className="container">
                    <Shop history={history} basket={basket} />
                  </div>
                );
              }}
            />
            <PrivateRoute
              path="/basket"
              render={() => {
                return (
                  <Basket
                    basket={basket}
                    totalSum={totalSum}
                    allRemoveFromBasket={allRemoveFromBasket}
                    addToBasket={addToBasket}
                    removeFromBasket={removeFromBasket}
                  />
                );
              }}
            />
            <PrivateRoute
              path="/addgood"
              render={() => {
                return (
                  <AddGood addGood={addGood} history={history} />
                );
              }}
            />
            <Route
              path="/singin"
              exact
              render={() => {
                return <SinginWithValue history={history} />;
              }}
            />
          </Switch>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

const mapStateToProps = (state) => ({
  basket: getBasket(state),
  basketLength: getBasketSelectLength(state),
  totalSum: getTotalSum(state),
});
const mapDispatchToProps = (dispatch) => ({
  addToBasket: (id) => {
    dispatch(ActionCreator.addToBasket(id));
  },
  removeFromBasket: (id) => {
    dispatch(ActionCreator.removeFromBasket(id));
  },
  addGood: (good) => {
    dispatch(ActionCreator.addGood(good));
  },
  allRemoveFromBasket: (id) => {
    dispatch(ActionCreator.allRemoveFromBasket(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
