import axios from "axios";
import { useState, useEffect } from "react";

const API_KEY = "6e44d21f-2f0a-42a6-bd89-1adacd11a126"

function NewPhotoList() {
    const [photo, setPhotos] = useState([])

      const getPhotos = async () => {
        try {
          const response = await axios.get(
            `https://unit-3-project-c5faaab51857.herokuapp.com/photos?api_key=${API_KEY}`
          );
          setPhotos(response.data.photo);
        } catch (error) {
          console.log("error", error)
        }
      };

      useEffect(() => {
        console.log("Photos state updated:", getPhotos);
      }, [photo]);
  return (
    <div>
      
    </div>
  )
}

export default NewPhotoList
