import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../PhotoForm/PhotoForm.scss";

const API_KEY = "6e44d21f-2f0a-42a6-bd89-1adacd11a126";

function PhotoForm() {
  const { photoId } = useParams();
  const [photo] = useState({});
  const [comments, setComments] = useState([]);
  const [newComments, setNewComments] = useState([]);

  const getCommentsById = async () => {
    try {
      const commentsResponse = await axios.get(
        `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${photoId}/comments?api_key=${API_KEY}`
      );
      const sortedComments = commentsResponse.data.sort(
        (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
      );
      setComments(sortedComments);

      setComments(commentsResponse.data);
    } catch (error) {
      console.error("Error fetching comments by ID", error);
    }
  };
  useEffect(() => {
    getCommentsById();
  }, [photoId]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const username = form.username.value;
    const comment = form.commentText.value;

    const newComment = {
      name: username,
      comment: comment,
    };

    addComment(newComment);
  };

  const addComment = async (newComment) => {
    try {
      const newCommentsResponse = await axios.post(
        `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${photoId}/comments?api_key=${API_KEY}`,
        newComment
      );
      setNewComments(newCommentsResponse.data);
      getCommentsById();
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <>

      <section className="form">
        <form onSubmit={handleSubmit} className="form__section">
          <div>
            <div className="form__title">
              <label htmlFor="username" className="body">
                Name
              </label>
              <input
                id="username"
                name="username"
                type="text"
                className="form__input"
                required
              />
            </div>

            <div className="form__title">
              <label htmlFor="commentText" className="body">
                Comment
              </label>
              <textarea
                id="commentText"
                name="commentText"
                type="text"
                className="form__input form__input--comment"
                required
              />
            </div>
          </div>
          <div className="form__button">
            <button type="submit" className="body-button">
              Submit
            </button>
          </div>
        </form>
      </section>

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

export default PhotoForm;
