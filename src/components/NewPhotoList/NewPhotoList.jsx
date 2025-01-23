import axios from "axios";
import { useState, useEffect } from "react";

const API_KEY ="6e44d21f-2f0a-42a6-bd89-1adacd11a126";

const NewPhotoList = () => {
  const [photos, setPhotos] = useState(null);

  const getPhotos = async () => {
    try {
      const response = await axios.get(
        `https://unit-3-project-c5faaab51857.herokuapp.com/photos?api_key=${API_KEY}`
      );
      console.log("API Response:", response.data)
      setPhotos(response.data);
    } catch (error) {
      console.log("Error fetching movies", error);
    }
  };
 

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <section className="photos">
    {photos &&
      photos.map((photo) => (
        <article key={photo.id} className="photo-card__container">
          <img
            className="photos__img"
            src={photo.photo}
            alt={`Photo ${photo.photoDescription}`}
          />
        </article>
      ))}
  </section>
  );
};

export default NewPhotoList;