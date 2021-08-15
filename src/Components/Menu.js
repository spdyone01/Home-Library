import React from 'react';
import Hamburger from './Hamburger';
import '../styles/Menu.css';
import { Link } from 'react-router-dom';

class Menu extends React.Component {

    render() {
        return (
            <div className='menu'>
                <div className='menu-div'>
                    <h1 className=''>{this.props.user.firstName}</h1>
                    <Hamburger />
                </div>
                <div>
                    <h3>
                        <Link to='/' className='navbar-brand '>My Library</Link>
                    </h3>
                </div>
                <div>
                    <div className='list-group menu-items'>
                        <button type='button' href='#' className='list-group-item list-group-item-action' aria-current='true'><Link to='/collections'>Collections</Link></button>
                        <button type='button' href='#' className='list-group-item list-group-item-action'><Link to='/readingqueue'>ReadingQueue</Link></button>
                        <button type='button' href='#' className='list-group-item list-group-item-action'><Link to='/favorites'>Favorites</Link></button>
                        <button type='button' href='#' className='list-group-item list-group-item-action'><Link to='/wanted'>Wanted</Link></button>
                        <button type='button' href='#' className='list-group-item list-group-item-action'><Link to='/readhistory'>Read History</Link></button>
                        <button type='button' href='#' id='addBookLink' className='addBook list-group-item list-group-item-action'><Link to='/addbook'>Add Book</Link></button>
                    </div>
                </div>
                <div className='signout-button'>
                    <button className='btn btn-secondary'>{ this.props.user ? `Sign Out` : `Sign In`}</button>
                </div>
            </div>
        )
    }
}

export default Menu;