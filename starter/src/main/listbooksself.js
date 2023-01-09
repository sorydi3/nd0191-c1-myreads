import React from "react";
import Book from "./book";
import PropTypes from "prop-types";

function ListBooksSelf({ books, shelf, onShelfChange, search }) {
  console.log(JSON.stringify(books) + " " + shelf + " -----ZCCzx " + search);
  return (
    <div className="bookshelf-books">
      <ol className="books-grid">
        {!search
          ? books
              .filter((book) => book.shelf === shelf)
              .map((book) => (
                <li key={book.id}>
                  <Book
                    authors={book.authors}
                    title={book.title}
                    imageLinks={book.imageLinks.thumbnail}
                    idBook={book.id}
                    onShelfChange={onShelfChange}
                  />
                </li>
              ))
          : books.map((book) => (
              <li key={book.id}>
                <Book
                  authors={book.authors}
                  title={book.title}
                  imageLinks={book.imageLinks.thumbnail}
                  idBook={book.id}
                  onShelfChange={onShelfChange}
                />
              </li>
            ))}
      </ol>
    </div>
  );
}

ListBooksSelf.prototype = {
  books: PropTypes.array.isRequired,
  onShelfChange: PropTypes.func.isRequired,
};

export default ListBooksSelf;
