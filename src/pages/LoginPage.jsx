import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'
import { authTypes } from '../types/authTypes'

const LoginPage = () => {
    const { dispatch } = useContext(AuthContext);
    const history = useHistory();
    const handleLogin = () => {
        dispatch({ type: authTypes.login })
        history.push("/mens")
    }
    return (
        <div className="container mt-5 text-center">
            <img src="/assets/animate.gif" alt="animacion" />;
            <h1 className="my-3">
                Login Screen
            </h1>
            <button className="btn btn-primary" onClick={handleLogin}>
                Login
            </button>
        </div>
    )
}

export default LoginPage
