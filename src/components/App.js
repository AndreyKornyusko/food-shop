import React, { Component, lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import styles from './app.module.scss';

import AppHeader from './AppHeader/AppHeader';
import MenuItemPage from '../pages/MenuItem';
import MainPage from '../pages/Main';
import AddItemPage from '../pages/AddItem';
import AboutPage from '../pages/About';
import ContactPage from '../pages/Contact';
import DeliveryPage from '../pages/Delivery';
import AccountPage from '../pages/Account';
import OrderHistoryPage from '../pages/OrderHistory';
import MealPlannerPage from '../pages/Planner';
import CartPage from '../pages/Cart';

import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute';
import * as operations from '../redux/auth/operations';
import routes from '../configs/routes';

const MenuPage = lazy(() =>
  import('../pages/Menu' /* webpackChunkName: "menu-page" */),
);

const SignUpPage = lazy(() =>
  import('../pages/SignUp' /* webpackChunkName: "SignUp-page" */),
);

const LogInPage = lazy(() =>
  import('../pages/SignIn' /* webpackChunkName: "LogIn-page" */),
);

class App extends Component {
  componentDidMount() {
    this.props.refreshCurrentUser();
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <AppHeader />
        {/* <Header/> */}
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path={routes.MAIN} component={MainPage} />
            <Route exact path={routes.MENU} component={MenuPage} />
            <Route exact path={routes.ADD_MENU_ITEM} component={AddItemPage} />
            <Route exact path={routes.MENU_ITEM} component={MenuItemPage} />
            <Route path={routes.ABOUT} component={AboutPage} />
            <Route path={routes.CONTACT} component={ContactPage} />
            <Route path={routes.DELIVERY} component={DeliveryPage} />

            <ProtectedRoute
              path={routes.ACCOUNT}
              redirectTo={routes.LOGIN}
              component={AccountPage}
            />
            <ProtectedRoute
              path={routes.ORDER_HISTORY}
              redirectTo={routes.LOGIN}
              component={OrderHistoryPage}
            />
            <Route path={routes.SIGNUP} component={SignUpPage} />
            <Route path={routes.LOGIN} component={LogInPage} />
            <Route path={routes.PLANNER} component={MealPlannerPage} />
            <Route path={routes.CART} component={CartPage} />

            <Redirect to="/" />
          </Switch>
        </Suspense>
      </div>
    );
  }
}

export default connect(
  null,
  { refreshCurrentUser: operations.refreshCurrentUser },
)(App);
