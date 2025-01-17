import "./PhotoCard.scss"

export default function PhotoCard({ photo }) {
    return (
        <div className="movie-card">
            <img className="photos__img" src={photo.photo} alt={`Photo ${photo.id}`} />
                  <p className="photos__photographer body">{photo.photographer}</p>
                  <p className="photos__tags body">{photo.tags}</p>
        </div>
    );
}