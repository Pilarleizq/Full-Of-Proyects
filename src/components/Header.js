import { Link } from 'react-router-dom';
const Header = ({ logo, linkTo }) => {
  return (
    <header className="header">
      <Link className="link text" to={linkTo}>
        Proyectos Molones
      </Link>
      {/* <p className="text">Proyectos Molones</p> */}
      <a href="https://www.adalab.es" target="blank">
        <img src={logo} alt="" className="logo" />
      </a>
    </header>
  );
};

export default Header;
