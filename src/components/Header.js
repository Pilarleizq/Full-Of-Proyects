
const Header = ({logo}) => {

return (
<header className="header">
    <p className="text">Proyectos Molones</p>
    <a href="https://www.adalab.es" target="blank">
        <img src={logo} alt="" className="logo" />
    </a>
</header>
)};

export default Header;