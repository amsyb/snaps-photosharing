import "./Footer.scss";
import facebookIcon from "../../assets/images/Facebook.svg"
import twitterIcon from "../../assets/images/X_twitter.svg"
import instagramIcon from "../../assets/images/Instagram.svg"
import pinterestIcon from "../../assets/images/Pinterest.svg"

function Footer() {
  return (
    <>
      <section className="footer">
        <ul className="footer__title-primary">
          <h2 className="wordmark">Snaps</h2>
          <ul className="footer__primary">
            <li className="body-footer">For photographers</li>
            <li className="body-footer">Hire talent</li>
            <li className="body-footer">Inspiration</li>
          </ul>

          <ul className="footer__secondary">
            <li className="body-footer">About</li>
            <li className="body-footer">Careers</li>
            <li className="body-footer">Support</li>
          </ul>
        </ul>

        <ul className="footer__icons">
          <li>
            <img src={facebookIcon} alt="" />
          </li>
          <li>
          <img src={twitterIcon} alt="" />
          </li>
          <li>
          <img src={instagramIcon} alt="" />
          </li>
          <li>
          <img src={pinterestIcon} alt="" />
          </li>
        </ul>

        <ul className="footer__tertiary">
          <li className="body-footer">2024 Snaps</li>
          <li className="body-footer">Terms</li>
          <li className="body-footer">Privacy</li>
          <li className="body-footer">Cookies</li>
        </ul>
      </section>
    </>
  );
}

export default Footer;
