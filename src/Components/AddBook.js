import React from 'react';

// Import components
import AddBookCard from './AddBookCard';
import '../styles/AddBookCard.css';

class AddBook extends React.Component {

    render() {
        
        return(
            <div className='content'>
                <AddBookCard 
                    searchItems={ this.props.searchItems } 
                    addBookToLibrary= { this.props.addBook }
                    bookList= { this.props.bookList }
                />
            </div>
        )
    }
}

export default AddBook;