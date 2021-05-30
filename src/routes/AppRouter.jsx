import React, { lazy, Suspense } from 'react'
import {
    Switch,
    Route, Redirect
} from "react-router-dom";
import NavBar from '../components/NavBar';
/*import CharacterPage from '../pages/CharacterPage';
import MensPage from '../pages/MensPage';
import SearchPage from '../pages/SearchPage';
import WomansPage from '../pages/WomansPage';*/


//const NavBar = lazy(() => import("../components/NavBar"))
const CharacterPage = lazy(() => import("../pages/CharacterPage"))
const MensPage = lazy(() => import("../pages/MensPage"))
const SearchPage = lazy(() => import("../pages/SearchPage"))
const WomansPage = lazy(() => import("../pages/WomansPage"))
const AppRouter = () => {
    return (
        <>
            <NavBar />
            <Suspense fallback={<h1 className="text-center" >Loading</h1>}>

                <Switch>
                    <Route exact path="/mens" component={MensPage} />
                    <Route exact path="/womans" component={WomansPage} />
                    <Route exact path="/search" component={SearchPage} />
                    <Route exact path="/character/:id" component={CharacterPage} />
                    <Redirect to="/mens" />
                </Switch>
            </Suspense>
        </>
    )
}

export default AppRouter
