import { useEffect, useState } from 'react';
import './App.css';
import Guns from './componets/Guns/Guns';
import Header from './componets/Header/Header';

function App() {
  const [guns, setGuns] = useState([]);
  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setGuns(data))
  }, [])

  return (
    <div className='App'>
      <div className='header-componet'>
        <Header />
      </div>
      <div className='guns-container'>
        {
          guns.map(gunData => <Guns
            key={gunData.id}
            gunData={gunData}
          />)
        }
      </div>
    </div>
  );
}

export default App;
