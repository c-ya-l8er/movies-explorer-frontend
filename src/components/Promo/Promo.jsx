import { Link } from "react-router-dom";
import "./Promo.css";
import PromoLogo from "../../images/promo-logo.svg";

function Promo() {
  return (
    <section className='promo'>
        <h2 className='promo__title'>
          Учебный проект студента факультета Веб-&#8288;разработки.
        </h2>
        <p className='promo__subtitle'>
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </p>
        <Link className='promo__link' to='/#about-project' target='_blank'>
          Узнать больше
        </Link>
        <img className='promo__logo' alt='landing logo' src={PromoLogo} />
    </section>
  );
}

export default Promo;
