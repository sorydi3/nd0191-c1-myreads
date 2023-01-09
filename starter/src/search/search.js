import React from "react";
import { Link } from "react-router-dom";
import { search } from "../utils/BooksAPI";
import ListBooksSelf from "../main/listbooksself";
import { useEffect } from "react";
function Search() {
  const [searchter, setSearch] = React.useState("");
  const [books, setBooks] = React.useState([]);
  const handleChange = (event) => {
    setSearch(event.target.value);
  };
  useEffect(() => {
    let mounted = true;
    if (searchter.length > 0) {
      search(searchter, 10)
        .then((books) => {
          if (mounted) {
            console.log(books);
            if (books.error) {
              books = [];
              setBooks(books);
              console.log(books + " ERRR " + searchter);
            } else {
              setBooks(books);
            }
          }
        })
        .catch((error) => {
          console.log(error + " " + searchter);
        });
    } else {
      setBooks([]);
    }

    return () => {
      mounted = false;
    };
  }, [searchter]);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            value={searchter}
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ListBooksSelf books={books} search={true} />
      </div>
    </div>
  );
}

export default Search;
