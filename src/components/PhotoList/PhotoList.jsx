import PhotoCard from "../PhotoCard/PhotoCard";

import photos from "../../data/photos.json";

function PhotoList({ activeFilter }) {
  let filteredPhotos = photos.filter((photo) => {
    if (activeFilter === null) {
      return true;
    } else if (photo.tags.includes(activeFilter)) {
      return true;
    } else {
      return false;
    }
  });

  return (
    <div className="photo__list">
      {filteredPhotos.map((photo) => {
        return <PhotoCard key={photo.id} photo={photo} />;
      })}
    </div>
  );
}
export default PhotoList;
