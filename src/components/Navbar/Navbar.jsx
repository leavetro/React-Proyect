import './Navbar.scss'
import logo from '../../assets/logo-greenlife.svg'
import CartWidget from '../CartWidget/CartWidget';



export const Navbar = () => {
    
  return (
    <header className="header">
      <div className="header__container">
        <img src={logo} alt="LOGO" />

        <nav className="navbar">
          <p className="navbar__link">Inicio</p>
          <p className="navbar__link">Tienda</p>
          <p className="navbar__link">Contacto</p>
        </nav>
        <CartWidget/>
      </div>
    </header>
  );
};
