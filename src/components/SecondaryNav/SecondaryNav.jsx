import "./SecondaryNav.scss";
import arrowIcon from "../../assets/images/Arrow.svg";
import { Link } from 'react-router-dom'


function SecondaryNav() {
  return (
    <header className="navigation">
      <span className="navigation__logo wordmark"> Snaps</span>


    <Link to = "/"> 
    <div className="link">
<img src={arrowIcon} alt="back-button" className="link__icon" />
      <h2 className="body link__title"> 
        Home
      </h2>
      </div>
      </Link>
  </header>
  )
}

export default SecondaryNav

