import React from 'react';
import { BsFillCartCheckFill } from 'react-icons/bs';
import './Guns.css';

const Guns = ({ gunData, handleAddToCart }) => {
    const { img, name, bullet, capacity, action, price, id } = gunData;

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
                <h2 className='gun__info--price'>
                    <button onClick={() => { handleAddToCart(gunData) }}>
                        <BsFillCartCheckFill />
                    </button>
                    ${price}
                </h2>
            </div>
        </div>
    );
};

export default Guns;