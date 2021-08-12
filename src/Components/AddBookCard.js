import { render } from '@testing-library/react';
import React from 'react';

class AddBookCard extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            ISBNS: [],
            searchISBNS: [],
            searchResults: [] 
        }
        this.addBook = this
            .addBook
            .bind(this)
    }


    addBook = (result) => {
        console.log(result)
        this.props.addBookToLibrary(result);
    }

    render() {
        if(this.props.searchItems.length > 0){
            let searchResultsWithImg = this.props.searchItems.map((result) => {
                const imageAddress = `http://covers.openlibrary.org/b/isbn/${result.isbn[0]}-L.jpg`;
                console.log(result)
                
                //update to push to state array
                let newSearchISBNS = this.state.searchISBNS;
                newSearchISBNS.push(result.isbn[0]);

                return (
                    <div className="card-group" key={result.isbn[0]}>
                        <div className="card">
                            <img src={ imageAddress } className="card-img-top" alt={ result.title } />
                            <div className="card-body">
                                <h5 className="card-title">{result.title}</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Last updated 3 mins ago</small>
                                <button onClick={this.addBook} id={result.isbn[0]}>Add Book to library</button>
                                <button>Add Book to Wishlist</button>
                            </div>
                        </div>
                    </div>
                )
            })
            if(searchResultsWithImg.length >= 1){
                return (
                    <div className='addBookCard-wrapper'>
                        { searchResultsWithImg }
                    </div>
                )
            }            
        } else{
            return (
                <div>
                    Search for a book above!
                </div>
            )
        }
    }
}

export default AddBookCard;