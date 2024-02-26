import { Link } from "react-router-dom";
import "./Portfolio.css";

function Portfolio() {
  return (
    <section className='portfolio'>
      <h3 className='portfolio__brief'>Портфолио</h3>
      <ul className='portfolio__items'>
        <li className='portfolio__item'>
          <Link
            className='porfolio__link'
            to='https://c-ya-l8er.github.io/how-to-learn/'
            target='_blank'
            rel='noreferrer'
          >
            Статичный сайт
            <p className='portfolio__link-arrow'>↗</p>
          </Link>
        </li>
        <li className='portfolio__item'>
          <Link
            className='porfolio__link'
            to='https://c-ya-l8er.github.io/russian-travel/'
            target='_blank'
            rel='noreferrer'
          >
            Адаптивный сайт
            <p className='portfolio__link-arrow'>↗</p>
          </Link>
        </li>
        <li className='portfolio__item'>
          <Link
            className='porfolio__link'
            to='https://c-ya-l8er.github.io/react-mesto-auth'
            target='_blank'
            rel='noreferrer'
          >
            Одностраничное приложение
            <p className='portfolio__link-arrow'>↗</p>
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
