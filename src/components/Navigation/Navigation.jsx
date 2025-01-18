import "./Navigation.scss"

function Navigation({ filtersOpen, setFiltersOpen }) {
  return (
    <header className="navigation">
    <span className="navigation__logo wordmark"> Snaps</span>
    <button
        className={`toggle-filters-button ${
            filtersOpen ? "toggle-filters-button--open" : ""
        }`}
        onClick={() => setFiltersOpen((prev) => !prev)}
    >
        Filters
    </button>
</header>
   )
  }

export default Navigation


