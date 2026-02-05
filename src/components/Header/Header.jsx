import './Header.scss';
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="header_inner">
        <div className="brand">
          <img className="brand_logo" src={logo} alt="Kolokolo logo" />
          <span className="brand_name">Kolo Kolo Mlýnský</span>
        </div>

        <nav className="nav">
          <Link className="nav_link" to="/story">About us</Link>
          <Link className="nav_link" to="/gallery">Gallery</Link>
          <Link className="nav_link" to="/location">Location</Link>
          <Link className="nav_link" to="/contacts">Contacts</Link>
        </nav>

        <button className="burger" type="button" aria-label="Open menu">
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

export default Header;
