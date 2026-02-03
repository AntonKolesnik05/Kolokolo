import './Header.scss';
import logo from '../../assets/images/logo.png';

function Header() {
  return (
    <header className="header">
      <div className="header_inner">
        <div className="brand">
          <img className="brand_logo" src={logo} alt="Kolokolo logo" />
          <span className="brand_name">Kolo Kolo Mlýnský</span>
        </div>

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
