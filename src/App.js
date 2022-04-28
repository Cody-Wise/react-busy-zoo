import logo from './logo.svg';
import './App.css';
import AnimalParade from './AnimalParade';
import OpenandClosed from './OpenandClosed';
import { useState } from 'react';

function App() {
  const [isOpen, setisOpen] = useState(false);
  const [unicornSize, setunicornSize] = useState(10);
  const [lionSize, setlionSize] = useState(10);
  const [animals, setanimals] = useState(['frog', 'bird']);

  const sizeModifier = 1;

  return (
    <div className="App">
      <header className="App-header">
        <div className="fight">
          <div className="monster">
            <img src="unicorn.png" width={unicornSize * 10} />
            <div className="buttons" />
            <button onClick={() => setunicornSize(unicornSize + sizeModifier)}>
              Unicorn is powering up
            </button>
            <button onClick={() => setunicornSize(unicornSize - sizeModifier)}>
              Unicorn is hurt!
            </button>
          </div>
        </div>
        <div className="fight">
          <div className="monster">
            <img src="lion.png" width={lionSize * 10} />
            <div className="buttons" />
            <button onClick={() => setlionSize(lionSize + sizeModifier)}>
              Lion is powering up
            </button>
            <button onClick={() => setlionSize(lionSize - sizeModifier)}>Lion is hurt!</button>
          </div>
        </div>
        <OpenandClosed />
        <AnimalParade />
      </header>
    </div>
  );
}

export default App;
