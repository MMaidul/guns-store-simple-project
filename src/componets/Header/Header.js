import React from 'react';
import { BsFillCartCheckFill } from 'react-icons/bs';
import './Header.css';
const Header = ({ count }) => {
    console.log(count);
    return (
        <div className='header-container'>
            <h2>Guns King Store</h2>
            <div className='cart-count'>
                <h2>{count.length}</h2>
                <span><BsFillCartCheckFill /></span>
            </div>
        </div>
    );
};

export default Header;