import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../PhotoComments/PhotoComments.scss";

function PhotoComments({ newComments }) {
  const base_URL = import.meta.env.VITE_API_URL;
  const { photoId } = useParams();

  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeComment = (e) => {
    setComment(e.target.value);
  };

  const isFormValid = () => name.trim() || comment.trim();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isFormValid()) {
      console.error("Error: Fields cannot be empty.");
      return;
    }

    const newComment = { name, comment };

    try {
      await axios.post(
        `${base_URL}/api/photos/${photoId}/comments`,
        newComment
      );
      setName("");
      setComment("");
      newComments();
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <section className="form">
      <form onSubmit={handleSubmit} className="form__section">
        <div className="form__title">
          <label htmlFor="username" className="body">
            Name
          </label>
          <input
            id="username"
            name="username"
            value={name}
            onChange={handleChangeName}
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
            value={comment}
            onChange={handleChangeComment}
            className="form__input form__input--comment"
            required
          />
        </div>

        <div className="form__button">
          <button type="submit" className="body-button">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}

export default PhotoComments;
