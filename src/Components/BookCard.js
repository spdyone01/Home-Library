import React from 'react';
import '../styles/Bookcard.css';

const BookCard = (props) => {
    
    return ( 
        <div className={ "ui link cards" }>
            <div className="card">
                <div className="image">
                <img src= {props.cover} alt= { props.bookTitle }></img>
                </div>
                <div className="content">
                    <div className="main">{ props.bookTitle }</div>
                    <div className="meta">
                        <a href='/'>{ props.author}</a>
                    </div>
                    <div className="description">
                         Published by: { props.publishedBy } in { props.publishedYear} 
                    </div>
                </div>
                <div className="extra content">
                    <span className="right floated">
                        ISBN: { props.ISBN }
                    </span>
                    <span>
                        <i className="book icon"></i>
                        Genre: {props.genre}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default BookCard;