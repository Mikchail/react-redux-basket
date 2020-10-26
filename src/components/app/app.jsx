import React from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {getBasket} from '../../store/data/selector';
import {ActionCreator} from '../../store/data/reducer';

import Singin from '../signin/signin';
import Basket from '../basket/basket';
import Shop from '../shop/shop';
import PrivateRoute from '../privite-router/privite-router';
import AddGood from '../add-good/add-good';
import withValue from '../../hocs/with-value/with-value';

const SinginWithValue = withValue(Singin);

import './app.scss';
const App = (props) => {
  const {basket, addToBasket, removeFromBasket,addGood,allRemoveFromBasket} = props;
  return (
    <div className="wrapper">
      <BrowserRouter>
        <header className="header">
          <div className="container">
            <Link to="/">
              <h2>Header</h2>
            </Link>
            <Link to="/addgood">
              <h2>addgood</h2>
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
                    allRemoveFromBasket={allRemoveFromBasket}
                    addToBasket={addToBasket}
                    removeFromBasket={removeFromBasket}
                  />
                );
              }}
            />
            <PrivateRoute
              path="/addgood"
              render={(routerProps) => {
                return <AddGood addGood={addGood} />;
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
  addGood: (good) => {
    dispatch(ActionCreator.addGood(good));
  },
  allRemoveFromBasket: (id) => {
    dispatch(ActionCreator.allRemoveFromBasket(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
