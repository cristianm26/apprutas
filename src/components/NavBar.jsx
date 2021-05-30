import React, { useContext } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';
import { authTypes } from '../types/authTypes';

const NavBar = () => {
    const history = useHistory();
    const { dispatch } = useContext(AuthContext)
    const handleLogout = () => {
        dispatch({ type: authTypes.logout })
        history.replace("/login")
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-info">
            <div className="container-fluid">
                <h2 className="navbar-brand" >DB APP</h2>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink activeClassName="active text-white" className="nav-link " aria-current="page" to="/mens">Hombres</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active text-white" className="nav-link" to="/womans">Mujeres</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active text-white" className="nav-link" to="/search">Buscar</NavLink>
                        </li>

                    </ul>
                    <div className="d-flex">
                        <button className="btn btn-danger" onClick={handleLogout}>
                            Cerrar Sesión
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
