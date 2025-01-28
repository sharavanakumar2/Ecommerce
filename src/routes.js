import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={ProductPage} />
                <Route path="/cart" component={CartPage} />
            </Switch>
        </Router>
    );
};

export default Routes;