import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/* Import api libraries */
import OpenLibrary from "../api/open_library";

/* Import Components */
import SearchBar from "./SearchBar";
import BookList from "./BookList";
import Collections from "./Collections";
import ReadingQueue from "./ReadingQueue";
import Favorites from "./Favorites";
import Wanted from "./Wanted";
import ReadHistory from "./ReadHistory";
import AddBook from "./AddBook";
import page404 from "./page404";

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: "",
      searchItems: [],
      bookList: [],
      filterText: "",
      searchType: ["title", "author", "genre", "Date Added"],
      activeSearchType: 0
    };
  }

  onSearchSubmit = async (term, searchType, activeSearchType) => {
    console.log(this.state.searchType);
    const response = await OpenLibrary.get(
      `/search.json?${
        this.state.searchType[this.state.activeSearchType]
      }=${term}&limit=5`,
      {
        params: ""
      }
    );
    // this.setState({ searchResults: response });
    this.setState({ searchItems: response.data.docs });
  };

  filterBooks = (term) => {
    this.setState({ filterText: term });
  };

  render() {
    return (
      <div className="content">
        <Switch>
          <Route
            path="/addbook"
            exact
            render={() => (
              <SearchBar
                label={"Book Search"}
                searchType={this.state.searchType}
                onSearchSubmit={this.onSearchSubmit}
              />
            )}
          />
          <Route
            path="/"
            render={() => (
              <SearchBar
                label={"Book Filter"}
                onFilterChange={this.filterBooks}
                searchType={this.state.searchType}
              />
            )}
          />
        </Switch>

        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <BookList bookList={this.props.bookList} isAuthed={true} />
            )}
          />
          <Route
            path="/collections"
            exact
            render={() => (
              <Collections bookList={this.props.bookList} isAuthed={true} />
            )}
          />
          <Route
            path="/readingqueue"
            exact
            render={() => (
              <ReadingQueue bookList={this.props.bookList} isAuthed={true} />
            )}
          />
          <Route
            path="/favorites"
            exact
            render={() => (
              <Favorites bookList={this.props.bookList} isAuthed={true} />
            )}
          />
          <Route
            path="/wanted"
            exact
            render={() => (
              <Wanted bookList={this.props.bookList} isAuthed={true} />
            )}
          />
          <Route
            path="/readhistory"
            exact
            render={() => (
              <ReadHistory bookList={this.props.bookList} isAuthed={true} />
            )}
          />
          <Route
            path="/addbook"
            exact
            render={() => (
              <AddBook
                bookList={this.props.bookList}
                isAuthed={true}
                addBook={this.props.addBookToLibrary}
                searchItems={this.state.searchItems}
              />
            )}
          />
          <Route component={page404} />
        </Switch>
      </div>
    );
  }
}

export default Content;
