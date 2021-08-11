import React from 'react';
import BookCard from './BookCard';
import '../styles/BookList.css';

class BookList extends React.Component {
       
    render() {
        let bookList = []
        console.log(bookList)
        bookList = this.props.bookList.map((book) => {
            const imageAddress = `http://covers.openlibrary.org/b/isbn/${book.isbn[0]}-L.jpg`;
            
            return (
                <BookCard 
                    bookTitle = { book.title }
                    author = { book.author_name[0] }
                    publishedYear = { book.first_publish_year }
                    publishedBy = { book.publisher[0] }
                    genre = { (typeof book.subject === "undefined") || !book.subject[0] ? '' : book.subject[0] }
                    ISBN = { book.isbn[0] }
                    cover = { imageAddress }
                    key = { book.isbn[0] }
                />
            )
        })

        console.log(bookList)

        if(bookList.length > 0){
            return (
                <div className='book-list'>
                    { bookList }
                </div>
            )
        } else {
            return (
                <div>
                    <p>Add a book to start your collection!</p>
                </div>
            )
        }

        
    }
}

export default BookList;