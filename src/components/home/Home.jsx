import React from 'react';
import profileImg from '../../assets/profile-img.png';
import { Link } from 'react-scroll';
import { FaGithubAlt, FaLinkedinIn } from 'react-icons/fa';
import CV from '../../assets/Olakunle_Nathaniel_Resume.pdf';
import './home.css';

const Home = () => {
  const openPdfInNewTab = () => {
    window.open(CV, '_blank');
  };
  return (
    <section className='home' id='home'>
      <div className='home__wrapper'>
        <div className='home__container container'>
          <h1 className='home__title text-cs'>
            <span>Nathaniel</span> Obafemi
          </h1>
          <p className='home__job'>
            <b>Data Analyst </b>
          </p>

          <div className='home__img-wrapper'>
            <div className='home__banner'>
              <img
                src={profileImg}
                alt=''
                className='home__profile'
                style={{ marginLeft: '50px' }}
              />
            </div>

            <p className='home__data home__data-one'>
              <span className='text-lg'>
                4 <b>+</b>
              </span>

              <span className='text-sm text-cs'>
                Years of combined <span>Experience</span>
              </span>
            </p>

            <p className='home__data home__data-two'>
              <span className='text-lg'>
                20 <b>+</b>
              </span>

              <span className='text-sm text-cs'>
                Completed <span>Projects</span>
              </span>
            </p>
          </div>

          <p className='home__text'>
          Nathaniel Obafemi is a skilled and motivated data analyst and
            environmental scientist with 4 years of experience in environmental
            research. He is proficient in statistical analysis, modeling, ETL, Webscraping, and
            data visualization using software such as SQL, Python, Excel, and
            Tableau to develop data-driven solutions to complex problems.
            Nathaniel is committed to staying up-to-date with the latest
            industry trends and has a Master's degree in Environmental Science
            while currently being a Data Analysis student. He is a lifelong
            learner and valuable asset to any team or project.

          </p>

          <div className='home__socials'>
            <a
              href='http://linkedin.com/in/nathaniel-obafemi/'
              target='_blank'
              className='home__social-link'
            >
              <FaLinkedinIn />
            </a>

            <a
              href='https://github.com/Kunathly10'
              target='_blank'
              className='home__social-link'
            >
              <FaGithubAlt />
            </a>
          </div>

          <div className='home__btns'>
            <button onClick={openPdfInNewTab} className='btn text-cs'>
              VIEW CV
            </button>
            <Link
              className='hero__link text-cs'
              to='skills'
              spy={true}
              hashSpy={true}
              smooth={true}
              offset={-150}
              duration={500}
            >
              My Skills
            </Link>
          </div>
        </div>

        <div className='section__deco deco__left'></div>
      </div>

      <div className='section__bg-wrapper'>
        <span className='bg__title'>Data Analyst</span>
      </div>
    </section>
  );
};

export default Home;
