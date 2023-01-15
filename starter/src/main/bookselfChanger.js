import React, { useEffect } from "react";
import { get, update } from "./../utils/BooksAPI";
import { useState } from "react";

function updateState(idBook, value, onShelfChange, shelf) {
  get(idBook).then((book) => {
    update(shelf !== undefined ? { ...book, shelf } : book, value).then(() => {
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
    let mounted = true;
    get(idBook).then((book) => {
      if (mounted) setBook(book);
    });

    return () => {
      mounted = false;
    };
  });

  return (
    <div className="book-shelf-changer">
      <select
        value={book.shelf !== undefined ? book.shelf : "none"}
        onChange={handleChange}
      >
        <option value="nonee" disabled>
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
