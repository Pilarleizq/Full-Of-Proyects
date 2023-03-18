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
        <li className="preview">
          <section className="autor">
            <section className="info-project">
              <p className="subtitle">Personal Project Card</p>
              <hr className="line" />

              <h2 className="title">{obj.name}</h2>
              <p className="slogan">{obj.slogan}</p>
              <p className="desc">{obj.desc}</p>
              <section className="technologies">
                <p className="text">{obj.technologies}</p>
              </section>
            </section>

            <section className="info-autor">
              <img className="image" src={obj.photo} alt="Foto de la autora" />
              <p className="job">{obj.job}</p>
              <p className="name">{obj.autor}</p>
            </section>
          </section>
        </li>
      );
    });
  };

  return (
    <div className="container">
      <Header logo={logo} linkTo={''} />
      <main>
        <Link className="link text-landing" to="/create">
          Crea tu tarjeta de proyecto
        </Link>
        <section>{renderCard()}</section>
      </main>
    </div>
  );
};

export default Landing;
