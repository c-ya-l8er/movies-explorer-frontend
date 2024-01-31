import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

function Footer() {
  return (
    <footer className='footer'>
      <h2 className='footer__title'>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <p className='footer__copyright'>&copy; 2023</p>
      <nav className='footer__links'>
        <Link
          className='footer__link'
          to='https://practicum.yandex.ru/'
          target='_blank'
        >
          Яндекс.Практикум
        </Link>
        <Link className='footer__link' to='https://github.com/' target='_blank'>
          Github
        </Link>
      </nav>
    </footer>
  );
}

export default Footer;
