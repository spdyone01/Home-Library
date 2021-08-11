import React from 'react';
import Hamburger from './Hamburger';
import '../styles/Menu.css';
import { Link } from 'react-router-dom';

class Menu extends React.Component {

    render() {
        return (
            <div className='menu'>
                <div className='menu-div'>
                    <h1>{this.props.user.firstName}</h1>
                    <Hamburger />
                </div>
                <h3>
                    <Link to='/' className='navbar-brand'>My Library</Link>
                </h3>
                    <ul className='menu-items'>
                        <li><Link to='/collections'>Collections</Link></li>
                        <li><Link to='/readingqueue'>ReadingQueue</Link></li>
                        <li><Link to='/favorites'>Favorites</Link></li>
                        <li><Link to='/wanted'>Wanted</Link></li>
                        <li><Link to='/readhistory'>Read History</Link></li>
                        <li id='addBookLink' className='addBook'><Link to='/addbook'>Add Book</Link></li>
                    </ul>
                <button>{ this.props.user ? `Sign Out` : `Sign In`}</button>
            </div>
        )
    }
}

export default Menu;