import React from 'react';
import Hamburger from './Hamburger';
import '../styles/Menu.css';

class Menu extends React.Component {

    state = { 
        user: {
            name: 'Mia'
        }
    }

    render() {
        return (
            <div className='menu'>
                <div className='menu-div'>
                    <h1>Mia</h1>
                    <Hamburger />
                </div>
                <h3>My Library</h3>
                    <ul>
                        <li>Collections</li>
                        <li>Reading Queue</li>
                        <li>Favorites</li>
                        <li>Wanted</li>
                        <li>Read History</li>
                    </ul>
                <button>{ this.state.user ? `Sign Out` : `Sign In`}</button>
            </div>
        )
    }
}

export default Menu;