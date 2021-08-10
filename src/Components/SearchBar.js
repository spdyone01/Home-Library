import React from 'react';
import '../styles/SearchBar.css';

class SearchBar extends React.Component { //need a class based component here because we'll use state to handle user input.
    state = { term: '' };

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onSubmit(this.state.term)
    }
 

    render() { 
        return ( 
            <div className="ui segment search-bar">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Book Search</label>
                        <input 
                            type="text" 
                            value={this.state.term} 
                            onChange={(e) => this.setState({ term: e.target.value })}
                            placeholder='Add a book (note: adds first search result automatically. Will update...'
                        />
                    </div>
                </form>
            </div>  
        );
    };
};

export default SearchBar;