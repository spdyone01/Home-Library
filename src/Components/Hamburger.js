import React from 'react';
import '../styles/Hamburger.css';

class Hamburger extends React.Component {
    menuToggle() {
        const menuIcon = document.getElementById('hamburger')
        menuIcon.classList.toggle('active')
    }

    render() {
        return (
            <div className='hamburger-container'>
                <div className='hamburger' id='hamburger' onClick={this.menuToggle}>
                    <div className='topbar'></div>
                    <div className='middlebar'></div>
                    <div className='bottombar'></div>
                </div>
            </div>
        );
    }
}

export default Hamburger;