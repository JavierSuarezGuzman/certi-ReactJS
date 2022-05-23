import React from 'react';
import "./Footer.css";

const Footer = () => (
  <footer className="App-footer">
    <div className="footer__made">
      Realizado con
      {" "}
      <span role="img" aria-label="heart">💜</span>
      {" "}
      amor
      by <a
        href="https://www.linkedin.com/in/javier-suarez-guzman/"
        rel="noopener noreferrer"
        target="_blank"
        className='logo'
      >
        <span className='logo-img'>
          {" "}
          <span>Javier "KuaKer" Suárez Guzmán</span>
        </span>
      </a>
    </div>
    <div className='footer__location'>
      <span>Ciudad del mundo </span>
      -- Copy&copy;Left - {new Date().getFullYear()}
    </div>
  </footer>
);

export default Footer;