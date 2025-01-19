import { useState } from "react";
import Filter from "../Filter/Filter";
import PhotoList from "../PhotoList/PhotoList";
import "./MainContent.scss";

function MainContent({ filtersOpen }) {
  const [activeFilter, setActiveFilter] = useState(null)
  return (
    <section className="all">
    <div className="hero">
    <p className="body">Our mission:</p>
    <p className="title">Provide photographers a space to share photos of the neighborhoods they cherish, <i>expressed in thier unique style</i></p>
    </div>

    <div className="main-content">
            {filtersOpen && (
                <Filter
                    activeFilter={activeFilter}
                    setActiveFilter={setActiveFilter}
                />
            )}
            <PhotoList activeFilter={activeFilter} />
        </div>
        </section>
  ) 
}

export default MainContent