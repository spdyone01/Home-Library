import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

/* Import api libraries */
import OpenLibrary from '../api/open_library';

/* Import Components */
import SearchBar from './SearchBar';
import BookList from './BookList';
import Collections from './Collections';
import ReadingQueue from './ReadingQueue';
import Favorites from './Favorites';
import Wanted from './Wanted';
import ReadHistory from './ReadHistory';
import AddBook from './AddBook';
import page404 from './page404';

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResults: '',
            bookList: []
        }
    }
    
    onSearchSubmit = async (term) => {
        const response = await OpenLibrary.get(`/search.json?q=${term}`, {
            params: ''
        })
        this.setState({ searchResults: response });

        // old method
        
        this.props.addBook(this.state.searchResults.data.docs[0]);

        // console.log(newBook);
        // console.log(oldBookList);
    }

    render() {
        
        return(
            <div className='content'>
                <SearchBar 
                    onSubmit={ this.onSearchSubmit }  
                />
                <Router></Router>
                <Switch>
                    <Route 
                        path='/' exact
                        render={() => (
                            <BookList bookList={this.props.bookList} isAuthed={true}/>
                        )}
                    />
                    <Route 
                        path='/collections' exact
                        render={() => (
                            <Collections bookList={this.props.bookList} isAuthed={true}/>
                        )}
                    />
                    <Route 
                        path='/readingqueue' exact
                        render={() => (
                            <ReadingQueue bookList={this.props.bookList} isAuthed={true}/>
                        )}
                    />
                    <Route 
                        path='/favorites' exact
                        render={() => (
                            <Favorites bookList={this.props.bookList} isAuthed={true}/>
                        )}
                    />
                    <Route 
                        path='/wanted' exact
                        render={() => (
                            <Wanted bookList={this.props.bookList} isAuthed={true}/>
                        )}
                    />
                    <Route 
                        path='/readhistory' exact
                        render={() => (
                            <ReadHistory bookList={this.props.bookList} isAuthed={true}/>
                        )}
                    />
                    <Route 
                        path='/addbook' exact
                        render={() => (
                            <AddBook bookList={this.props.bookList} isAuthed={true}/>
                        )}
                    />
                    <Route component={page404}/>
                </Switch>
            </div>
        )
    }
}

export default Content;