import React from 'react';
import './Guns.css';

const Guns = () => {
    return (
        <div className='gun-container'>
            <div className="gun__img">
                <img src="https://raw.githubusercontent.com/mir-hussain/guns/main/guns/glock.png" alt="" />
            </div>
            <div className="gun__info">
                <h2>Glock 17 Gen5</h2>
                <p>Bullet Type: 9mn</p>
                <p>Capacity: 17+ 1</p>
                <p>Action: semi Automatic</p>
                <p>Price: $540</p>
            </div>
        </div>
    );
};

export default Guns;