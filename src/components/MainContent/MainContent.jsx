import photos from "../../data/photos.json"
import "./MainContent.scss";

function MainContent() {
  return (
    <>
    <section className="photos">
    <ul className="photos__list">
      {photos
        .map((photo) => {
          return (
            <li className="photos__block" key={photo.id}>
              <img className="photos__img" src={photo.photo} alt={`Photo ${photo.id}`} />
              <p className="photos__photographer">{photo.photographer}</p>
              <p className="photos__tags">{photo.tags}</p>
            </li>
          );
        })}
    </ul>
  </section>
  </>
  )
}

export default MainContent
