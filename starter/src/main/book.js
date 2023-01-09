import React from "react";
import Changer from "./bookselfChanger";

function Book({ title, authors, imageLinks, idBook, onShelfChange }) {
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: "url(" + imageLinks + ")",
          }}
        ></div>
        <Changer idBook={idBook} onShelfChange={onShelfChange} />
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{authors}</div>
    </div>
  );
}

export default Book;
