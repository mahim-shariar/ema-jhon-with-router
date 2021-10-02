import './App.css';
import Header from './components/Header/Header';
import Invetory from './components/inventory/Invetory'
import OrderReview from './components/OrderReview/OrderReview'
import Shop from './components/Shop/Shop';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFund from './components/Notfound/NotFund';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/" >
            <Shop></Shop>
          </Route>
          <Route path='/shop'>
            <Shop></Shop>
          </Route>
          <Route path='/inventory'>
            <Invetory></Invetory>
          </Route>
          <Route path='/orders'>
            <OrderReview></OrderReview>
          </Route>
          <Route exact path="*">
            <NotFund></NotFund>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
