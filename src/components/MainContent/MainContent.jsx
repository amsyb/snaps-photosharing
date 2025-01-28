import { useState } from "react";
import Filter from "../Filter/Filter";
import Hero from "../Hero/Hero";
import "./MainContent.scss";
import PhotoList from "../PhotoList/PhotoList";

function MainContent({ filtersOpen }) {
  const [activeFilter, setActiveFilter] = useState(null);
  return (
    <section className="main">
      <div className={`main__content ${filtersOpen ? "filters-open" : ""}`}>
        {filtersOpen && (
          <div className="main__filter">
            <Filter
              activeFilter={activeFilter}
              setActiveFilter={setActiveFilter}
            />
          </div>
        )}
        <div className="main__hero-list">
          <Hero />
          <PhotoList activeFilter={activeFilter} />
        </div>
      </div>
    </section>
  );
}

export default MainContent;
