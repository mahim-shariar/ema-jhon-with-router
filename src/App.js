import './App.css';
import Header from './components/Header/Header';
import Invetory from './components/inventory/Invetory'
import OrderReview from './components/OrderReview/OrderReview'
import Shop from './components/Shop/Shop';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFund from './components/Notfound/NotFund';
import 'bootstrap/dist/css/bootstrap.min.css';
import PlaceOrder from './components/placeOrder/PlaceOrder';
import NoOrder from './components/NoOrder/NoOrder';
import Login from './components/Login/Login'
import SignUp from './components/SignUp/SignUp';
import AuthProvider from './components/Context/AuthProvider';
import PrivateRoute from './components/PriveteRoute/PrivateRoute';
import Shipping from './components/shipping/Shipping';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/" >
              <Shop></Shop>
            </Route>
            <Route path='/shop'>
              <Shop></Shop>
            </Route>
            <PrivateRoute path='/inventory'>
              <Invetory></Invetory>
            </PrivateRoute>
            <Route path='/orders'>
              <OrderReview></OrderReview>
            </Route>
            <PrivateRoute path="/placeOrder">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <Route path='/noOrder' >
              <NoOrder></NoOrder>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/signUp">
              <SignUp></SignUp>
            </Route>
            <PrivateRoute path='/shipping'>
              <Shipping></Shipping>
            </PrivateRoute>
            <Route exact path="*">
              <NotFund></NotFund>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
