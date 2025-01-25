import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./PhotoDetails.scss";
import likeIcon from "../../assets/images/Like_Outline.svg";

const API_KEY = "6e44d21f-2f0a-42a6-bd89-1adacd11a126";
function PhotoDetails() {
  const { photoId } = useParams();
  const [photo, setPhoto] = useState({});
  const [comments, setComments] = useState([]);

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

  const getCommentsById = async () => {
    try {
      const commentsResponse = await axios.get(
        `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${photoId}/comments?api_key=${API_KEY}`
      );
      setComments(commentsResponse.data);
    } catch (error) {
      console.error("Error fetching comments by ID", error);
    }
  };

  useEffect(() => {
    getPhotoById(photoId);
  }, [photoId]);

  useEffect(() => {
    getCommentsById();
  }, [photoId]);

  return (
    <section className="display">
    <h1>Snaps</h1>
  
    {/* Photo Section */}
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
            <img src={likeIcon} alt="like-icon" />
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
  
    {/* Form Section */}
    <section className="form__section">
      <form action="">
        <label htmlFor="fname" className="body">Name</label>
        <input type="text" className="fill" required/>
        <label htmlFor="fname" className="body">Comment</label>
        <textarea type="text" className="fill" required/>
      </form>
      <button className="body">Submit</button>
    </section>
  
    {/* Comments Section */}
    <section className="comments__section">
    <ul className="comments">
  {comments.map((comment) => (
    <li key={comment.id}>
      <ul className="client-info">
        <li>{comment.name}</li>
        <li>{photo.timestamp
              ? new Intl.DateTimeFormat("en-US", {
                  year: "2-digit",
                  month: "2-digit",
                  day: "2-digit",
                }).format(new Date(photo.timestamp))
              : "Invalid date"}
              </li>
      </ul>
      <div className="comment-text">
        {comment.comment}
      </div>
      <div className="comment-timestamp">

      </div>
    </li>
  ))}
</ul>
    </section>
  </section>
  );
}

export default PhotoDetails;
