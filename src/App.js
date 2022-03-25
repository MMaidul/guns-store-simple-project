import { useEffect, useState } from 'react';
import './App.css';
import Guns from './componets/Guns/Guns';
import Header from './componets/Header/Header';

function App() {
  const [guns, setGuns] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setGuns(data))
  }, []);

  const handleAddToCart = (gun) => {
    const newCart = [...cart, gun];
    setCart(newCart)
  }

  return (
    <div className='App'>
      <div className='header-componet'>
        <Header count={cart} />
      </div>
      <div>
        {
          cart.map(item => <h1
            key={item.id}>{item.name}
          </h1>)
        }
      </div>
      <div className='guns-container'>
        {
          guns.map(gunData => <Guns
            key={gunData.id}
            gunData={gunData}
            handleAddToCart={handleAddToCart}
          />)
        }
      </div>
    </div>
  );
}

export default App;
