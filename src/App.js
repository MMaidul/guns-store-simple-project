import { useEffect, useState } from 'react';
import './App.css';
import Guns from './componets/Guns/Guns';

function App() {
  const [guns, setGuns] = useState([]);
  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setGuns(data))
  }, [])

  return (
    <div className='guns-container'>
      {
        guns.map(gun => <Guns />)
      }
    </div>
  );
}

export default App;
