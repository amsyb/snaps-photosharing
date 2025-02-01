import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../PhotoForm/PhotoForm.scss";

// const API_KEY = "6e44d21f-2f0a-42a6-bd89-1adacd11a126";

function PhotoComments() {

  const [newComments, setNewComments] = useState([]);
  const { photoId } = useParams();

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
            `http://localhost:8888/api/photos/${photoId}/comments`,
            newComment
          );
          setNewComments(newCommentsResponse.data);
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

    </>
  );
}

export default PhotoComments;
