import React from 'react';
import BookCard from './BookCard';
import '../styles/BookList.css';

class BookList extends React.Component {
    constructor(props){
        super(props);

        this.state={ bookList: [] }
    }
   
    render() {
        let bookList = []

        bookList = this.props.bookList.map((book) => {
            const imageAddress = `http://covers.openlibrary.org/b/isbn/${book.isbn[3]}-L.jpg`;

            return (
                <BookCard 
                    bookTitle = { book.title ? book.title : '' }
                    author = { book.author_name[0] ? book.author_name[0] : '' }
                    publishedYear = { book.first_publish_year ? book.first_publish_year : 0 }
                    publishedBy = { book.publisher[0] ? book.publisher[0] : '' }
                    genre = { (typeof book.subject === "undefined") || !book.subject[0] ? '' : book.subject[0] }
                    ISBN = { book.isbn[0] ? book.isbn[0] : '0000000000000'}
                    cover = { imageAddress ? imageAddress : '/src/images/Where_the_red_fern_grows.jpg' }
                    key = { book.isbn[0] }
                />
            )
        })

        return (
            <div className='book-list'>
                { bookList }
            </div>
        )
    }
}

export default BookList;