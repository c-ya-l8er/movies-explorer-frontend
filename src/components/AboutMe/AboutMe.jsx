import { Link } from "react-router-dom";
import "./AboutMe.css";
import MePhoto from "../../images/me-photo.png";
import Portfolio from "../Portfolio/Portfolio";

function AboutMe() {
  return (
    <section className='about-me'>
      <h3 className='about-me__brief'>Студент</h3>
      <article className='about-me__main-info'>
        <h2 className='about-me__title'>Виталий</h2>
        <h4 className='about-me__subtitle'>Фронтенд-разработчик, 30 лет</h4>
        <p className='about-me__paragraph'>
          Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня
          есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом.
          Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
          После того, как прошёл курс по веб-разработке, начал заниматься
          фриланс-заказами и ушёл с постоянной работы.
        </p>
        <Link
          className='about-me__link'
          to='https://github.com/c-ya-l8er'
          target='_blank'
          rel='noreferrer'
        >
          Github
        </Link>
        <img className='about-me__photo' alt='фото студента' src={MePhoto} />
      </article>
      <Portfolio />
    </section>
  );
}

export default AboutMe;
