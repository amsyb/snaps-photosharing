import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../PhotoId/PhotoId.scss";
import likeIcon from "../../assets/images/Like_Outline.svg";

function PhotoId() {
  const { photoId } = useParams();
  const [photo, setPhoto] = useState({});

  const getPhotoById = async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:8888/api/photos/endpoint2/${id}`
      );
      setPhoto(response.data.photo);
    } catch (error) {
      console.error("Error fetching photos by ID", error);
    }
  };

  useEffect(() => {
    getPhotoById(photoId);
  }, [photoId]);

  return (
    <section className="photo">
      {photo && (
        <section className="photo__card">
          <img
            src={photo.photo}
            alt={photo.photoDescription}
            className="photo__image"
          />
          <p className="photo__tag">
            {photo.tags?.map((tag, index) => (
              <span key={index} className="photos__tag body">
                {tag}
              </span>
            ))}
          </p>
          <div className="photo__details photo__details--tablet">
            <div className="photo__like">
              <img src={likeIcon} alt="like-icon" className="photo__icon" />
              <p className="body photo__likes">{photo.likes} likes</p>
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

          <div className="photo__details photo__details--mobile">
            <div>
              <div className="photo__like">
                <img src={likeIcon} alt="like-icon" className="photo__icon" />
                <p className="body photo__likes">{photo.likes}</p>
              </div>
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

            <p className="body photo__photographer">{photo.photographer}</p>
          </div>
        </section>
      )}
    </section>
  );
}

export default PhotoId;
