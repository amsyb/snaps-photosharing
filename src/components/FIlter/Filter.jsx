import tags from "../../data/tags.json";
import "../Filter/Filter.scss";

function Filter({ activeFilter, setActiveFilter }) {
  const handleFilterClick = (tagClicked) => {
    if (tagClicked === activeFilter) {
      setActiveFilter(null);
    } else {
      setActiveFilter(tagClicked);
    }
  };

  return (
    <div className="filter__list">
      <h2 className="filter__heading body">Filters</h2>
      <div className="filter__all-tags">
        {tags.map((tag, index) => {
          return (
            <span
              key={index}
              className={`filter body ${
                activeFilter === tag ? "filter--active" : ""
              }`}
              onClick={() => handleFilterClick(tag)}
            >
              {tag}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default Filter;
