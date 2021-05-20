import React from 'react';
import bookCover from './images/Where_the_red_fern_grows.jpg'

const BookCard = (props) => {
    
    return ( 
        <div class="ui link cards">
            <div class="card">
                <div class="image">
                    <img src= {bookCover}></img>
                </div>
                <div class="content">
                    <div class="header">{ props.bookTitle }</div>
                    <div class="meta">
                        <a>{ props.author}</a>
                    </div>
                    <div class="description">
                         Published by: { props.publishedBy } in { props.publishedYear} 
                    </div>
                </div>
                <div class="extra content">
                    <span class="right floated">
                        ISBN: { props.ISBN }
                    </span>
                    <span>
                        <i class="book icon"></i>
                        {props.pageCount} pages
                    </span>
                </div>
            </div>
        </div>
    )
}

export default BookCard;