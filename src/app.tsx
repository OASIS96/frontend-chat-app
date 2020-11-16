import React from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import { LoginPage } from './pages/login.page';

export const App = () => {
    return (
        <Router>
            <Redirect from="/" to="/login"></Redirect>
            <Route exact path="/login" component={LoginPage}></Route>
        </Router>
    )
}
