import { useState } from "react";
import Filter from "../Filter/Filter";
import Hero from "../Hero/Hero";
import "./MainContent.scss";
import PhotoList from "../PhotoList/PhotoList";

function MainContent({ filtersOpen }) {
  const [activeFilter, setActiveFilter] = useState(null);
  return (
    <section className="all">
      <div className={`main-content ${filtersOpen ? "filters-open" : ""}`}>
        {filtersOpen && (
          <Filter
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
          />
        )}
        <div className="main-test">
          <Hero />
          <PhotoList activeFilter={activeFilter} />
        </div>
      </div>
    </section>
  );
}

export default MainContent;
