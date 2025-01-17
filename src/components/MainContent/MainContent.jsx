import photos from "../../data/photos.json"

function MainContent() {
  return (
    <>
    <section className="photos">
    <ul className="photos__list">
      {photos
        .map((photo) => {
          return (
            <li key={photo.id}>
              <img className="photos__img" src={photo.photo} alt={`Photo ${photo.id}`} />
              <p>{photo.photographer}</p>
              <p>{photo.tags}</p>
            </li>
          );
        })}
    </ul>
  </section>
  </>
  )
}

export default MainContent
