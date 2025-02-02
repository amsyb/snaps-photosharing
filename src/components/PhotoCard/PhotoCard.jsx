import "./PhotoCard.scss";
import { Link } from "react-router-dom";

export default function PhotoCard({ photo }) {
  return (
    <div className="photos">
      <Link to={`/photos/${photo.id}`}>
        <div className="photos__name">
          <img
            className="photos__img"
            src={photo.photo}
            alt={`Photo ${photo.photoDescription}`}
          />
          <p className="photos__photographer body">{photo.photographer}</p>
        </div>
      </Link>
      <p className="photos__tags">
        {photo.tags.map((tag, index) => (
          <span key={index} className="photos__tag body">
            {tag}
          </span>
        ))}
      </p>
    </div>
  );
}
