import "./AboutProject.css";

function AboutProject() {
  return (
    <section className='about-project'>
      <h3 className='about-project__brief'>О проекте</h3>
      <article className='about-project__main-info'>
        <div>
          <h3 className='about-project__title'>
            Дипломный проект включал 5 этапов
          </h3>
          <p className='about-project__paragraph'>
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div>
          <h3 className='about-project__title'>
            На выполнение диплома ушло 5 недель
          </h3>
          <p className='about-project__paragraph'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </article>
      <article className='about-project__timeline'>
        <p className='about-project__time'>1 неделя</p>
        <p className='about-project__time'>4 недели</p>
        <p className='about-project__end'>Back-end</p>
        <p className='about-project__end'>Front-end</p>
      </article>
    </section>
  );
}
export default AboutProject;
