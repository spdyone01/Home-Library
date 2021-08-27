import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

/* Import Styles */
import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

/* Import Componenets */
import Header from './Header';
import Menu from './Menu';
import Content from './Content';
import Footer from './Footer';



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookList: [],
            user: {
                id: 0,
                firstName: 'userFirstName',
                lastName: 'userLastName',
                userName: 'userName',
                collections: [],
                readingQueue: [],
                favorites: [],
                wishlist: [],
                readHistory: [],
                bookListView: 'grid'
            }
        };
    }
    
    // Checks if book exists in bookList already
    diff = (book, bookList) => {
        var ret = [];
        console.log(book)
        console.log(bookList)

        function checkExists(bookList, newBookIsbn) {
            if(bookList.length >= 1){
                console.log(bookList)
                return bookList.some(function(book) {
                    return book.isbn.some(function(isbn) {
                        return isbn === newBookIsbn;
                    })
                });
            } else {
                return false;
            }
        }

        ret = checkExists(bookList, book.isbn[0])
        return ret;
    };

    addBookToLibrary = (book) => {
        if(book !== 'undefined'){
            const exists = this.diff(book, this.state.bookList)
            
            if(!exists){
                const oldBookList = this.state.bookList;
                oldBookList.push(book);
                this.setState({ bookList: oldBookList });
            } else {
                alert('Book already in library!')
            }
        }
    }
    render() {

        return (
            <Router>
                <div className='app-body'>
                    <Header className='Header' userName={ this.state.user.userName }/>
                    <Menu user={ this.state.user }/>
                    <Content 
                        bookList={ this.state.bookList }
                        addBookToLibrary={this.addBookToLibrary}
                    />
                    <Footer />
                </div>
            </Router>
        )
    }
}

export default App;