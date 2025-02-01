import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../PhotoForm/PhotoForm.scss";

function PhotoDetails() {
  const { photoId } = useParams();
  const [comments, setComments] = useState([]);

  const getCommentsById = async (id) => {
    try {
      const commentsResponse = await axios.get(
             `http://localhost:8888/api/photos/${id}/comments`
      );
      const sortedComments = commentsResponse.data.sort(
        (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
      );
      setComments(sortedComments);
    } catch (error) {
      console.error("Error fetching comments by ID", error);
    }
  };
  useEffect(() => {
    getCommentsById(photoId);
  }, [photoId]);


  return (
    <>
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


