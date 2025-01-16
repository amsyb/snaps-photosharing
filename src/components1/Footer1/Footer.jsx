import "../Footer/Footer.scss";

function Footer() {
  return (
   <>
       <section className="footer">
        <h2 className="wordmark">Snaps</h2>
        <ul className="footer__title-primary">
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
            <li><img src="" alt="facebook"/></li>
            <li><img src="" alt="twitter"/></li>
            <li><img src="" alt="instagram"/></li>
            <li><img src="" alt="pinterest"/></li>
        </ul>

        <ul className="footer__tertiary">
            <li className="body-small">2024 Snaps</li>
            <li className="body-small">Terms</li>
            <li className="body-small">Privacy</li>
            <li className="body-small">Cookies</li>
        </ul>
    </section>
   </>
  )
}

export default Footer
