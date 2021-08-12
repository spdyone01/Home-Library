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
                <div>
                    <h3>
                        <Link to='/' className='navbar-brand'>My Library</Link>
                    </h3>
                </div>
                <div>
                    <ul className='menu-items list-group'>
                        <a href='#' className='list-group-item list-group-item-action'><Link to='/collections'>Collections</Link></a>
                        <a href='#' className='list-group-item list-group-item-action'><Link to='/readingqueue'>ReadingQueue</Link></a>
                        <a href='#' className='list-group-item list-group-item-action'><Link to='/favorites'>Favorites</Link></a>
                        <a href='#' className='list-group-item list-group-item-action'><Link to='/wanted'>Wanted</Link></a>
                        <a href='#' className='list-group-item list-group-item-action'><Link to='/readhistory'>Read History</Link></a>
                        <a href='#' id='addBookLink' className='addBook list-group-item list-group-item-action'><Link to='/addbook'>Add Book</Link></a>
                    </ul>
                </div>
                <div className='signout-button'>
                    <button className='btn btn-secondary'>{ this.props.user ? `Sign Out` : `Sign In`}</button>
                </div>
            </div>
        )
    }
}

export default Menu;