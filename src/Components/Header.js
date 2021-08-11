import React from 'react';
import '../styles/Header.css';

class Header extends React.Component {

    render() {
        return (
            <h1 className='header'>{this.props.userName}'s Library</h1>
        )
    }
}

export default Header;