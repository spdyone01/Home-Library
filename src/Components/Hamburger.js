import React from 'react';
import '../styles/Hamburger.css';

class Hamburger extends React.Component {
    menuToggle() {
        console.log('menuToggle clicked')
    }

    render() {
        return (
            <div className='hamburger' onClick={this.menuToggle}>
                <div className='topbar'></div>
                <div className='middlebar'></div>
                <div className='bottombar'></div>
            </div>
        );
    }
}

export default Hamburger;