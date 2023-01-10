import React, { useEffect } from "react";
import { get, update } from "./../utils/BooksAPI";
import { useState } from "react";

function updateState(idBook, value, onShelfChange) {
  get(idBook).then((book) => {
    update(book, value).then(() => {
      if (onShelfChange) onShelfChange();
    });
  });
}

function Changer({ idBook, onShelfChange }) {
  const [book, setBook] = useState({});
  const handleChange = (event) => {
    updateState(idBook, event.target.value, onShelfChange);
  };

  useEffect(() => {
    get(idBook).then((book) => {
      setBook(book);
    });
  });

  return (
    <div className="book-shelf-changer">
      <select value={book.shelf} onChange={handleChange}>
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
