import React from 'react';
import BookCard from './BookCard';
import '../styles/BookList.css';

class BookList extends React.Component {
    
    render() {
        let bookList = []

        if(this.props.bookList){
            bookList = this.props.bookList.map((book) => {
                const imageAddress = `http://covers.openlibrary.org/b/isbn/${book.isbn[3]}-L.jpg`;
                return (
                    <BookCard 
                        bookTitle = { book.title }
                        author = { book.author_name[0] }
                        publishedYear = { book.first_publish_year }
                        publishedBy = { book.publisher[0] }
                        genre = { book.subject[0] }
                        ISBN = { book.isbn[0] }
                        cover = { imageAddress }
                    />
                )
            })
        }

        return (
            <div className='book-list'>
                { bookList }
            </div>
        )
    }
}

export default BookList;