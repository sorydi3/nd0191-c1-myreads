import React from "react";
import { Link } from "react-router-dom";
import Bookself from "./main/bookself";
import { getAll } from "./utils/BooksAPI";

import { useEffect, useState } from "react";
const shelfs = ["currentlyReading", "wantToRead", "read"];
function getAllbooks(setBooks) {
  getAll().then((books) => {
    setBooks(books);
    //console.log(books);
  });
}

function MainPage() {
  let title1 = "Currently Reading";
  let title2 = "Want to Read";
  let title3 = "Read";

  const [books, setBooks] = useState([]);

  useEffect(() => {
    getAllbooks(setBooks);
  }, []);

  const onShelfChange = () => {
    getAllbooks(setBooks);
  };

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Bookself
            title={title1}
            books={books}
            shelf={shelfs[0]}
            onShelfChange={onShelfChange}
          />
          <Bookself
            title={title2}
            books={books}
            shelf={shelfs[1]}
            onShelfChange={onShelfChange}
          />
          <Bookself
            title={title3}
            books={books}
            shelf={shelfs[2]}
            onShelfChange={onShelfChange}
          />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
}

export default MainPage;
