import "./Footer.scss";
import { FacebookIcon, InstagramIcon, PinterestIcon, TwitterIcon } from "../../components/Icons/Images"

function Footer() {
  return (
    <>
      <section className="footer">
        <ul className="footer__title-primary">
          <h2 className="wordmark">Snaps</h2>
          <ul className="footer__primary">
            <li className="body">For photographers</li>
            <li className="body">Hire talent</li>
            <li className="body">Inspiration</li>
          </ul>

          <ul className="footer__secondary">
            <li className="body">About</li>
            <li className="body">Careers</li>
            <li className="body">Support</li>
          </ul>
        </ul>

        <ul className="footer__icons">
          <li>
           <FacebookIcon />
          </li>
          <li>
            <InstagramIcon />
          </li>
          <li>
 
          </li>
          <li>
            <PinterestIcon />
          </li>
        </ul>

        <ul className="footer__tertiary">
          <li className="body-small">2024 Snaps</li>
          <li className="body-small">Terms</li>
          <li className="body-small">Privacy</li>
          <li className="body-small">Cookies</li>
        </ul>
      </section>
    </>
  );
}

export default Footer;
