import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import About from '../../pages/about/About';

import './Header.css';


const Header = ({ //DESTRUCTURACIÓN!
    data,
    setData,
    searchWord,
    setSearchWord,

}) => {


    return (

        <div>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <Link to=''>About certification</Link>
                </li>
            </ul>
            <h1>Free English Dictionary</h1>

        </div>

    )
};

export default Header;