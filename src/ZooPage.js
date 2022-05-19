import React from 'react';
import AnimalParade from './AnimalParade';
import OpenandClosed from './OpenandClosed';
import { useState } from 'react';

export default function ZooPage() {
  const [isOpen, setisOpen] = useState(false);
  const [unicornSize, setunicornSize] = useState(10);
  const [lionSize, setlionSize] = useState(6);
  const [animals, setAnimals] = useState(['frog', 'bird', 'alligator']);

  const sizeModifier = 1;
  return (
    <div className="App">
      <header>
        <h1>Welcome to the Wise Zoo</h1>
      </header>
      <main className="App-header">
        <OpenandClosed setisOpen={setisOpen} isOpen={isOpen} />
        <h2>Lion vs Unicorn in a DeathMatch</h2>
        <div className="fighting">
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
        </div>
        <AnimalParade setAnimals={setAnimals} animals={animals} />
      </main>
    </div>
  );
}
