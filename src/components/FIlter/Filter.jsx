import "../Filter/Filter.scss";
import axios from "axios";
import { useState, useEffect} from "react";

const API_KEY = "6e44d21f-2f0a-42a6-bd89-1adacd11a126"

function Filter({ activeFilter, setActiveFilter }) {
  const [tags, setTags] = useState([]);

  const handleFilterClick = (tagClicked) => {
    if (tagClicked === activeFilter) {
      setActiveFilter(null);
    } else {
      setActiveFilter(tagClicked);
    }
  };

  const getTags = async () => {
    try {
      const response = await axios.get(
        `https://unit-3-project-c5faaab51857.herokuapp.com/tags?api_key=${API_KEY}`
      );
      setTags(response.data);
    } catch (error) {
      console.log("Error fetching tags", error);
    }
  };

  useEffect(() => {
    getTags();
  }, []);


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
