import { React } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from './components/header/Header';
import Footer from './components/Footer/Footer';
import AboutPage from "./pages/about/About";


import './App.css';

function App() {

  return (

      <div>
        <Header />

        <Footer />
      </div>

  )
};


export default App;
