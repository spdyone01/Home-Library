import React from 'react';

class AddBookCard extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            ISBNS: [],
            searchISBNS: [],
            searchResults: [] 
        }
        this.addBookToLibrary = this
            .addBookToLibrary
            .bind(this)
    }


    addBookToLibrary = (book) => {
        console.log(book)
        // console.log(book)
        this.props.addBookToLibrary(book);
    }

    render() {
        if(this.props.searchItems.length > 0){
            let searchResultsWithImg = this.props.searchItems.map((result) => {
                const imageAddress = `http://covers.openlibrary.org/b/isbn/${result.isbn[0]}-L.jpg`;
                
                //update to push to state array
                let newSearchISBNS = this.state.searchISBNS;
                newSearchISBNS.push(result.isbn[0]);

                console.log(result)

                return (
                    <div className="card-group" key={result.isbn[0]}>
                        <div>
                            <div className="card h-25 w-75 d-inline-block">
                                <img src={ imageAddress } className="card-img-top" alt={ result.title } />
                                <div className="card-body">
                                    <h5 className="card-title">{result.title}</h5>
                                    <p className="card-text">{result.author_name[0]}</p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">First Published In: {result.first_publish_year}</small>
                                    <button className='btn btn-primary' onClick={this.addBookToLibrary.bind(this, result)} id={result.isbn[0]}>Add Book to library</button>
                                    <button className='btn btn-secondary'>Add Book to Wishlist</button>
                                    <small className="text-muted">ISBN: {result.isbn[0]}</small>
                                </div>
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