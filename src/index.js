import React from 'react';
import ReactDOM from 'react-dom';
import BookCard from './BookCard'

class App extends React.Component {
    state = {

     };

    componentDidMount() { 

    };

    render() {  

        return (
            <div>
                <div className='card-wrapper'>
                    
                </div>
                <BookCard 
                    bookTitle="Where the Red Fern Grows"
                    author="Wilson Rawls"
                    publishedYear="1961"
                    publishedBy="Doubleday"
                    pageCount="245"
                    ISBN="0-440-22814-X">
                </BookCard>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);