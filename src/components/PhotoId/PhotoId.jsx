import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../PhotoId/PhotoId.scss";
import likeIcon from "../../assets/images/Like_Outline.svg";

const API_KEY = "6e44d21f-2f0a-42a6-bd89-1adacd11a126";
function PhotoId() {

    const { photoId } = useParams();
    const [photo, setPhoto] = useState({});

    const getPhotoById = async (id) => {
        try {
          const response = await axios.get(
            `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${id}?api_key=${API_KEY}`
          );
          setPhoto(response.data);
        } catch (error) {
          console.error("Error fetching photos by ID", error);
        }
      };

      useEffect(() => {
        getPhotoById(photoId);
      }, [photoId]);

  return (
    <section className="display">
    <h1>Snaps</h1>
  
    {photo && (
      <section className="photo">
        <img
          src={photo.photo}
          alt={photo.photoDescription}
          className="photo__image"
        />
        <p className="photos__tags">
          {photo.tags?.map((tag, index) => (
            <span key={index} className="photos__tag body">
              {tag}
            </span>
          ))}
        </p>
        <div className="photo__details">
          <div className="photo__like">
            <img src={likeIcon} alt="like-icon" className="photo-like"/>
            <p className="body photo__likes">{photo.likes}</p>
          </div>
          <p className="body photo__photographer">{photo.photographer}</p>
          <p className="body photo__timestamp">
            {photo.timestamp
              ? new Intl.DateTimeFormat("en-US", {
                  year: "2-digit",
                  month: "2-digit",
                  day: "2-digit",
                }).format(new Date(photo.timestamp))
              : "Invalid date"}
          </p>
        </div>
      </section>
    )}
  </section>
  );
}


export default PhotoId
