import { useState } from "react";
import Filter from "../Filter/Filter";
import PhotoList from "../PhotoList/PhotoList";
import Hero from "../Hero/Hero"
import "./MainContent.scss";

function MainContent({ filtersOpen }) {
  const [activeFilter, setActiveFilter] = useState(null)
  return (
    <section className="all">

    <div className="main-content">
            {filtersOpen && (
                <Filter
                    activeFilter={activeFilter}
                    setActiveFilter={setActiveFilter}
                />
            )}
             <Hero />
            <PhotoList activeFilter={activeFilter} />
        </div>
        </section>
  ) 
}

export default MainContent