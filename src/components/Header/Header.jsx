import "./Header.scss";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  return (
    <header className="header">
      <div className="header_inner">
        <a className="brand" href="">
          <img className="brand_logo" src={logo} alt="Kolokolo logo" />
          <span className="brand_name">Kolo Kolo Mlýnský</span>
        </a>

        <nav className="nav">
          <Link className="nav_link" to="/story">
            About us
          </Link>
          <Link className="nav_link" to="/FullGallery">
            Gallery
          </Link>
          <Link className="nav_link" to="/location">
            Location
          </Link>
          <Link className="nav_link" to="/contacts">
            Contacts
          </Link>
        </nav>

        <button className="burger" type="button" aria-label="Open menu">
          <MenuIcon />
        </button>
      </div>
    </header>
  );
}

export default Header;
