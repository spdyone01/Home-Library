import React from 'react';
import '../styles/SearchBar.css';

class SearchBar extends React.Component { //need a class based component here because we'll use state to handle user input.
    
    state = { term: '' };
    

    onSearchSubmit = (event) => {
        event.preventDefault();
        this.props.onSearchSubmit(this.state.term, this.props.searchType)
        this.setState({ term: '' });
    }


    onFilterChange = (event) => {
        this.setState({ term: event.target.value })
        this.props.onFilterChange(this.state.term)
        console.log(this.state.term)
    }
 

    render() { 
        if(this.props.label === 'Book Search'){
            return ( 
                <div className="ui segment search-bar">
                    <form onSubmit={this.onSearchSubmit} className="ui form">
                        <div className="field">
                            <label>{ this.props.label }</label>
                            <input 
                                type="text" 
                                value={this.state.term} 
                                onChange={(e) => this.setState({ term: e.target.value })}
                                placeholder='Search for a book here'
                            />
                        </div>
                    </form>
                </div>  
            );
        } else {
            return (
                <div className="ui segment search-bar">
                    <form className="ui form" onSubmit={(e) => e.preventDefault()}>
                        <div className="field">
                            <label>{ this.props.label }</label>
                            <input 
                                type="text" 
                                value={this.state.term} 
                                onChange={(e) => this.onFilterChange(e)}
                                placeholder={`Filter Books by ${this.props.searchType}`}
                            />
                        </div>
                    </form>
                </div>
            )
        }        
    };
};

export default SearchBar;