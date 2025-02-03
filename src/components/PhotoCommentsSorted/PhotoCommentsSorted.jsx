import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import PhotoComments from "../PhotoComments/PhotoComments";
import "./PhotoDetails1.scss";

function PhotoDetails() {
  const base_URL = import.meta.env.VITE_API_URL;
  const { photoId } = useParams();
  const [comments, setComments] = useState([]);

  const getCommentsById = async () => {
    try {
      const response = await axios.get(
        `${base_URL}/api/photos/${photoId}/comments`
      );
      const sortedComments = response.data.sort(
        (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
      );
      setComments(sortedComments);
    } catch (error) {
      console.error("Error fetching comments by ID", error);
    }
  };

  useEffect(() => {
    getCommentsById();
  }, [photoId]);

  return (
    <>
      <PhotoComments newComments={getCommentsById} />

      <section className="comment">
        <h2 className="body comment__text">
          {comments.length === 1 ? "1 Comment" : `${comments.length} Comments`}
        </h2>
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>
              <ul className="comment__user">
                <li className="body-small comment__title">{comment.name}</li>
                <li className="body-small comment__title">
                  {comment.timestamp
                    ? new Intl.DateTimeFormat("en-US", {
                        year: "2-digit",
                        month: "2-digit",
                        day: "2-digit",
                      }).format(new Date(comment.timestamp))
                    : "Invalid date"}
                </li>
              </ul>
              <div className="body comment__text">{comment.comment}</div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default PhotoDetails;
