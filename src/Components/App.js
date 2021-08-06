import React from 'react';

/* Import api libraries */
import OpenLibrary from '../api/open_library';

/* Import Componenets */
import Header from './Header';
import Menu from './Menu';
import SearchBar from './SearchBar';
import BookList from './BookList';
import Footer from './Footer';

/* Import Styles */
import '../styles/App.css';

class App extends React.Component {
    state = { books: '' };

    onSearchSubmit = async (term) => {
        const response = await OpenLibrary.get(`/search.json?q=${term}`, {
            params: ''
        })

        this.setState({ books: response })
    }

    render() {  

        return (
            <div className='app-body'>
                <Header className='Header'/>
                <Menu />
                <SearchBar onSubmit={ this.onSearchSubmit }/>
                <BookList />
                <Footer />
            </div>
        )
    }
}

export default App;