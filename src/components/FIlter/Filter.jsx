import tags from "../../data/tags.json";

export default function Filter({ activeFilter, setActiveFilter }) {
    const handleFilterClick = (tagsClicked) => {
        if (tagsClicked === activeFilter) {
            setActiveFilter(null);
        } else {
            setActiveFilter(tagsClicked);
        }
    };

    return (
        <div className="filter-list">
            {tags.map((tag, index) => {
                return (
                    <span
                        key={index}
                        className={`filter ${
                            activeFilter === tag ? "filter--active" : ""
                        }`}
                        onClick={() => handleFilterClick(tag)}
                    >
                        {tag}
                    </span>
                );
            })}
        </div>
    );
}
