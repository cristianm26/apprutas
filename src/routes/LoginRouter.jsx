import React from 'react'
import { useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch,
} from "react-router-dom";
import { AuthContext } from '../context/AuthContext';
import LoginPage from '../pages/LoginPage';
import AppRouter from './AppRouter';
import PrivateRouter from './PrivateRouter';
import PublicRouter from './PublicRouter';
const LoginRouter = () => {

    const { log } = useContext(AuthContext)
    return (
        <Router>

            <Switch>

                <PublicRouter path="/login" auth={log} component={LoginPage} />
                <PrivateRouter path="/" auth={log} component={AppRouter} />
            </Switch>


        </Router>
    )
}

export default LoginRouter
