import React from 'react';
import bookCover from '../images/Where_the_red_fern_grows.jpg'

const BookCard = (props) => {
    
    
    return ( 
        <div className={ "ui link cards" }>
            <div className="card">
                <div className="image">
                <img src= {bookCover} alt=""></img>
                </div>
                <div className="content">
                    <div className="header">{ props.bookTitle }</div>
                    <div className="meta">
                        <a>{ props.author}</a>
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
                        {props.pageCount} pages
                    </span>
                </div>
            </div>
        </div>
    )
}

export default BookCard;