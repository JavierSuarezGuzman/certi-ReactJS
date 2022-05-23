import React, { useEffect, useState } from 'react';
import { BrowserRouter, Router, Routes, Route, Switch, Link, Layout } from 'react-router-dom';

import About from '../../pages/about/About';

import './Header.css';


const Header = () => (
    <BrowserRouter>

            <Switch>
                <Route exact path="/about" component={About} />
                <Route />
            </Switch>

    </BrowserRouter>
);

export default Header;
