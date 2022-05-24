import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './Header.css';

import Loader from '../Loader/Loader';

const About = lazy(() => import('../../pages/about/About')); //importanción de lazy


const Header = () => (
    <BrowserRouter>

        <Switch>
            <Suspense fallback={
                <div>
                    <Loader />
                </div>
            }
            >
                <Route exact path="/about" component={About} />
                <Route />
            </Suspense>
        </Switch>

    </BrowserRouter>
);

export default Header;
