import React, { Component } from "react";
import { Link } from "react-router-dom";
import Book from "../components/Book";

export default class SearchPage extends Component {
  render() {
    const { result, searchResult, updateShelf, addBook } = this.props;
    const handleInputChange = e => {
      e.preventDefault();
      e.target.value.length === 0 && this.props.clearResult();
      e.target.value.length > 0 && result(e.target.value.trim());
    };
    return (
      <div>
        <div className="search-books">
          <div className="search-books-bar">
            <Link to="/" className="close-search">
              Close
            </Link>
            <div className="search-books-input-wrapper">
              {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
              <input
                onChange={handleInputChange}
                type="text"
                placeholder="Search by title or author"
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              {/* {searchResult.length === 0 && (
                <div>No Books Were Found For This Search</div>
              )} */}
              {searchResult.map(book => {
                return (
                  <li key={book.id}>
                    <Book
                      book={book}
                      updateShelf={updateShelf}
                      addBook={addBook}
                    />
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    );
  }
}
