
function Navigation({ filtersOpen, setFiltersOpen }) {
  return (
    <header className="header">
    <span className="header__logo"> Snaps</span>
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


