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
                id: 23,
                firstName: 'userFirstName',
                lastName: 'userLastName',
                userName: 'userName',
                collections: [],
                readingQueue: [],
                favorites: [],
                wanted: [],
                readHistory: [],
                bookListView: 'grid'
            }
        };
    }

    addBook = (book) => {
        if(book !== 'undefined'){
            const oldBookList = this.state.bookList;
            oldBookList.push(book);
            this.setState({ bookList: oldBookList });
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
                        addBook={this.addBook}
                    />
                    <Footer />
                </div>
            </Router>
        )
    }
}

export default App;