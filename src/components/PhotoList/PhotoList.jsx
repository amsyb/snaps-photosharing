import axios from "axios";
import { useState, useEffect } from "react";
import PhotoCard from "../PhotoCard/PhotoCard";

<<<<<<< HEAD
const API_KEY ="6e44d21f-2f0a-42a6-bd89-1adacd11a126";

const NewPhotoList = ({ activeFilter }) => {
  const [photos, setPhotos] = useState([]);
=======
// import photos from "../../data/photos.json";
>>>>>>> main

  let filteredPhotos = photos.filter((photo) => {
    if (activeFilter === null) {
      return true;
    } else if (photo.tags.includes(activeFilter)) {
      return true;
    } else {
      return false;
    }
  });

  const getPhotos = async () => {
    try {
      const response = await axios.get(
        `https://unit-3-project-c5faaab51857.herokuapp.com/photos?api_key=${API_KEY}`
      );
      setPhotos(response.data);
    } catch (error) {
      console.log("Error fetching photos", error);
    }
  };
 

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <div className="photo__list">
    {filteredPhotos.map((photo) => {
      return <PhotoCard key={photo.id} photo={photo} />;
    })}
  </div>
  );
};

export default NewPhotoList;

