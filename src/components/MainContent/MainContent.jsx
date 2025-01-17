import { useState } from "react";
import Filter from "../FIlter/Filter";
import PhotoList from "../PhotoList/PhotoList";
import "./MainContent.scss";

function MainContent({ filtersOpen }) {
  const [activeFilter, setActiveFilter] = useState(null)
  return (
    <div className="main-content">
            {filtersOpen && (
                <Filter
                    activeFilter={activeFilter}
                    setActiveFilter={setActiveFilter}
                />
            )}
            <PhotoList activeFilter={activeFilter} />
        </div>
  )
}

export default MainContent
