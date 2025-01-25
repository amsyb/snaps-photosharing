import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../PhotoForm/PhotoForm.scss"

const API_KEY = "6e44d21f-2f0a-42a6-bd89-1adacd11a126";

function PhotoForm() {
  const { photoId } = useParams();
  const [photo] = useState({});
  const [comments, setComments] = useState([]);

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
    getCommentsById();
  }, [photoId]);
  return (
    <>
<section className="form__section">
  <form action="">
    <label htmlFor="fname" className="body">Name</label>
    <input id="fname" type="text" className="fill" required />

    <label htmlFor="comment" className="body">Comment</label>
    <textarea id="comment" className="fill" required /> 
  </form>

  <button className="body">Submit</button>
</section>

<section className="comments__section">
  <ul className="comments">
    {comments.map((comment) => (
      <li key={comment.id}>
        <ul className="client-info">
          <li>{comment.name}</li>
          <li>
            {comment.timestamp
              ? new Intl.DateTimeFormat("en-US", {
                  year: "2-digit",
                  month: "2-digit",
                  day: "2-digit",
                }).format(new Date(comment.timestamp))
              : "Invalid date"}
          </li>
        </ul>
        <div className="comment-text">{comment.comment}</div>
        <div className="comment-timestamp"></div>
      </li>
    ))}
  </ul>
</section>
</>
  );
}

export default PhotoForm;
