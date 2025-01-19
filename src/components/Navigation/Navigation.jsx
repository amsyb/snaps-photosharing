import "./Navigation.scss"
import filterIcon from "../../assets/images/Filter.svg"

function Navigation({ filtersOpen, setFiltersOpen }) {
  return (
    <header className="navigation">
    <span className="navigation__logo wordmark"> Snaps</span>
    <button 
        className={`toggle-filters-button ${
            filtersOpen ? "toggle-filters-button--open" : ""
        }`}
        onClick={() => setFiltersOpen((prev) => !prev)}
    ><img src={filterIcon} alt="filter-icon" className="navigation__icon" />
        Filters
    </button>
</header>
   )
  }

export default Navigation


