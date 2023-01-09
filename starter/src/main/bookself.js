import React from "react";
import ListBooksSelf from "./listbooksself";

function Bookself({ books, shelf, title, onShelfChange }) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <ListBooksSelf
        books={books}
        shelf={shelf}
        onShelfChange={onShelfChange}
        search={false}
      />
    </div>
  );
}
export default Bookself;
