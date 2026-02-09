import "./Footer.scss";

import logoCircle from "../../assets/images/logo.png";
import { FaFacebookF, FaWhatsapp, FaTelegramPlane } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer" id="contacts">
      <div className="footer_container">
        <div className="footer_top">
          <div className="footer_brand">
            <img className="footer_logo" src={logoCircle} alt="Kolokolo logo" />

            <div className="footer_brandText">
              <p className="footer_name">Kolokolo</p>
              <p className="footer_tag">Handcrafted in Prague</p>
            </div>
          </div>

          <div className="footer_social">
            <a className="footer_iconBtn" href="#" aria-label="Facebook">
             <FaFacebookF className="footer_iconSvg" />
            </a>
            <a className="footer_iconBtn" href="#" aria-label="WhatsApp">
              <FaWhatsapp className="footer_iconSvg" />
            </a>
            <a className="footer_iconBtn" href="#" aria-label="Telegram">
              <FaTelegramPlane className="footer_iconSvg" />
            </a>
          </div>
        </div>

        <div className="footer_middle">
          <div className="footer_contacts">
            <p className="footer_line">
              <span className="footer_label">Email</span>
              <a className="footer_link" href="mailto:kolokolo@gmail.com">
                kolokolo@gmail.com
              </a>
            </p>

            <p className="footer_line">
              <span className="footer_label">Phone</span>
              <a className="footer_link" href="tel:+420607823693">
                +420 607 823 693
              </a>
            </p>
          </div>
        </div>

        <div className="footer_bottom">
          <p className="footer_copy">© {new Date().getFullYear()} Kolokolo Bakery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
