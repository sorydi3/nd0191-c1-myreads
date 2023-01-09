import React from "react";
import { get, update } from "./../utils/BooksAPI";

function updateState(idBook, value, onShelfChange) {
  get(idBook).then((book) => {
    update(book, value).then(() => {
      if (onShelfChange) onShelfChange();
    });
  });
}

function Changer({ idBook, onShelfChange }) {
  const handleChange = (event) => {
    updateState(idBook, event.target.value, onShelfChange);
  };

  return (
    <div className="book-shelf-changer">
      <select onChange={handleChange}>
        <option value="none" disabled>
          Move to...
        </option>
        <option value="none">None</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="currentlyReading">Currently Reading</option>
      </select>
    </div>
  );
}

export default Changer;
