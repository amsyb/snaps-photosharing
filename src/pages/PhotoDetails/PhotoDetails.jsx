import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./PhotoDetails.scss";

const API_KEY = "6e44d21f-2f0a-42a6-bd89-1adacd11a126";
function PhotoDetails() {
  const { photoId } = useParams();
  const [photo, setPhoto] = useState([]);
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
    <section>
      {photo && (
        <article>
          <img src={photo.photo} alt={photo.photoDescription} />
          <p className="body">{photo.tags}</p>
          <div className="details_details">
            <p className="body">{photo.likes}</p>
            <p className="body">{photo.photographer}</p>
            <p className="body">{photo.timestamp}</p>
            <div>
              <ul>
                {comments.map((comment) => (
                  <li key={comment.id}>
                    <strong>{comment.name}:</strong> {comment.comment}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      )}
    </section>
  );
}

export default PhotoDetails;

