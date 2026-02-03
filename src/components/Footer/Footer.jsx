import './Footer.scss';

import logoCircle from '../../assets/images/logo.png';
import iconFb from '../../assets/images/facebook.png';
import iconWa from '../../assets/images/whatsapp.png';
import iconTg from '../../assets/images/telegram.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_inner">
        <div className="footer_left">
          <div className="footer_brand">
            <img className="footer_logo" src={logoCircle} alt="Kolokolo logo" />
            <p className="footer_tag">Handcrafted in Prague</p>
          </div>

          <div className="footer_contacts">
            <p className="footer_line">
              <span className="footer_label">Email-</span>{' '}
              <a className="footer_link" href="mailto:kolokolo@gmail.com">
                kolokolo@gmail.com
              </a>
            </p>

            <p className="footer_line">
              <span className="footer_label">Phone-</span>{' '}
              <a className="footer_link" href="tel">
                +420 607 823 693
              </a>
            </p>
          </div>
        </div>

        <div className="footer_right">
          <div className="footer_social">
            <a className="footer_iconBtn" href="#" aria-label="Facebook">
              <img src={iconFb} alt="" />
            </a>
            <a className="footer__iconBtn" href="#" aria-label="WhatsApp">
              <img src={iconWa} alt="" />
            </a>
            <a className="footer__iconBtn" href="#" aria-label="Telegram">
              <img src={iconTg} alt="" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
