import React from 'react';
import './Guns.css';

const Guns = ({ gunData }) => {
    console.log(gunData);
    const { img, name, bullet, capacity, action, price } = gunData;
    return (
        <div className='gun-container'>
            <div className="gun__img">
                <img src={img} alt="" />
            </div>
            <div className="gun__info">
                <h3>{name}</h3>
                <p>Bullet Type: {bullet}</p>
                <p>Capacity: {capacity}</p>
                <p>Action: {action}</p>
                <p>Price: ${price}</p>
            </div>
        </div>
    );
};

export default Guns;