import React from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {getBasket} from '../../store/data/selector';
import {ActionCreator} from '../../store/data/reducer';

import Singin from '../signin/signin';
import Basket from '../basket/basket';
import Shop from '../shop/shop';
import PrivateRoute from '../privite-router/privite-router';
import withValue from '../../hocs/with-value/with-value';

const SinginWithValue = withValue(Singin);

import './app.scss';
const App = (props) => {
  const {basket, addToBasket, removeFromBasket} = props;
  return (
    <div className="wrapper">
      <BrowserRouter>
        <header className="header">
          <div className="container">
            <Link to="/">
              <h2>Header</h2>
            </Link>
            <Link to="/basket">{basket.length}</Link>
          </div>
        </header>
        <main className="main">
          <Switch>
            <PrivateRoute
              exact
              path="/"
              render={(routerProps) => {
                return (
                  <div className="container">
                    <Shop history={routerProps.history} />
                  </div>
                );
              }}
            />
            <PrivateRoute
              path="/basket"
              render={(routerProps) => {
                return (
                  <Basket
                    basket={basket}
                    addToBasket={addToBasket}
                    removeFromBasket={removeFromBasket}
                  />
                );
              }}
            />
            <Route path="/singin">
              <SinginWithValue />
            </Route>
          </Switch>
        </main>
        <footer className="footer">
          <div className="container">
            <h1>footer</h1>
          </div>
        </footer>
      </BrowserRouter>
    </div>
  );
};

const mapStateToProps = (state) => ({
  basket: getBasket(state),
});
const mapDispatchToProps = (dispatch) => ({
  addToBasket: (id) => {
    dispatch(ActionCreator.addToBasket(id));
  },
  removeFromBasket: (id) => {
    dispatch(ActionCreator.removeFromBasket(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
