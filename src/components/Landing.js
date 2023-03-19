import { Link } from 'react-router-dom';
import Header from './Header';
import logo from '../images/logo-adalab.png';
import ls from '../service/localStorage';
import '../styles/App.scss';

const Landing = () => {
  const dataCardLS = ls.get('dataCardLS', {});
  const renderCard = () => {
    return dataCardLS.map((obj) => {
      return (
        <li className="landing-card">
          <section className="project-info">
            <p className="project-subtitle">Personal Project Card</p>
            <hr className="landing-card-line" />

            <h2 className="project-title">{obj.name}</h2>
            <p className="project-slogan">{obj.slogan}</p>
            <p className="project-desc">{obj.desc}</p>
            <section className="project-technologies">
              <p className="text">{obj.technologies}</p>
            </section>
          </section>

          <section className="autor-info">
            <img
              className="autor-image"
              src={obj.photo}
              alt="Foto de la autora"
            />
            <p className="autor-job">{obj.job}</p>
            <p className="autor-name">{obj.autor}</p>
          </section>
        </li>
      );
    });
  };

  return (
    <div className="container">
      <Header logo={logo} linkTo={''} />
      <main>
        <section>
          <Link className="link landing-btn-create" to="/create">
            Crea tu tarjeta de proyecto
          </Link>
        </section>
        <ul className="landing-ul">{renderCard()}</ul>
      </main>
    </div>
  );
};

export default Landing;
