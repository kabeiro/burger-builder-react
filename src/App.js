import React, { useEffect, Suspense } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder';
import Logout from './containers/Auth/Logout/Logout';
import Spinner from './components/UI/Spinner/Spinner';
import * as actions from './store/actions/index';

// loads components asynchronically (on demand)
const Checkout = React.lazy(() => {
  return import ('./containers/Checkout/Checkout');
});

const Orders = React.lazy(() => {
  return import ('./containers/Orders/Orders');
});

const Auth = React.lazy(() => {
  return import ('./containers/Auth/Auth');
});

const Confirmation = React.lazy(() => {
  return import ('./components/Order/OrderConfirmation/OrderConfirmation');
});

const app = props => {
  useEffect(() => {
    props.onTryAutoSignUp();
  }, []);

  let routes = (
    <Switch>
        <Route path="/auth" render={props => <Auth {...props} />} />
        <Route path="/" exact component={BurgerBuilder} />
        <Redirect to="/"/>
      </Switch>
  );

  if (props.isAuthenticated) {
    routes = (
      <Switch>
          <Route path="/orders" render={props => <Orders {...props}/>} />
          <Route path="/checkout" render={props => <Checkout {...props}/>} />
          <Route path="/auth" render={props => <Auth {...props}/>} />
          <Route path="/logout" component={Logout} />
          <Route path="/order-confirmation" render={props => <Confirmation {...props}/>}/>
          <Route path="/" exact component={BurgerBuilder} />
          <Redirect to="/"/>
        </Switch>
    );
  }

  return (
    <div>
        <Layout>
          <Suspense fallback={Spinner}>
            {routes}
          </Suspense>
        </Layout>
      </div>
  );
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignUp: () => dispatch(actions.authCheckState())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(app));
