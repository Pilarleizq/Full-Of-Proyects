import { Link } from 'react-router-dom';
import Header from './Header';
import logo from '../images/logo-adalab.png';
import '../styles/App.scss';

const Landing = ({ dataCard }) => {
  console.log(dataCard);
  const renderCard = () => {
    return dataCard.map((obj) => {
      return (
        <div>
          <p>{obj.name}</p>
          <p>{obj.project}</p>
        </div>
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
