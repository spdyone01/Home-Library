import React from 'react';
import BookCard from './BookCard';
import '../styles/BookList.css';

class BookList extends React.Component {

    render() {

        return (
            <div className='book-list'>
                <BookCard 
                bookTitle = {this.bookTitle}
                author = {this.author}
                publishedYear = { 1961 }
                publishedBy = {"Doubleday"}
                pageCount = { 245 }
                ISBN = {"0-440-22814-X"}
                />
            </div>
        )
    }
}

export default BookList;