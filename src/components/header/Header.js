import React, { useEffect, useState, Suspense, lazy } from 'react';
import { BrowserRouter, Router, Routes, Route, Switch, Link, Layout } from 'react-router-dom';

import './Header.css';

import Loader from '../Loader/Loader';
//import About from '../../pages/about/About'; 

const About = React.lazy(() => import('../../pages/about/About')); //importanción de lazy


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
