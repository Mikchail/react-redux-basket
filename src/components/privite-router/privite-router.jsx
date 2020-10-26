import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import {getUser} from '../../store/user/selector';

const PrivateRoute = (props) => {
  const {render,user, path, exact} = props;
  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => {
        if (user) {
          return render(routeProps);
        } else {
          return <Redirect to={`/singin`} />;
        }
      }}
    />
  );
};

const mapStateToProps = (state) => ({
  user: getUser(state),
});

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
