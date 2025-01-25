import "./PhotoCard.scss";
import { Link } from 'react-router-dom'

export default function PhotoCard({ photo }) {
  return (
    <div className="photos">
      <div className="photos__name">
        <Link to = {`/photos/${photo.id}`}>
        <img
          className="photos__img"
          src={photo.photo}
          alt={`Photo ${photo.photoDescription}`}
        /> </Link>
        <p className="photos__photographer body">{photo.photographer}</p>
      </div>
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
