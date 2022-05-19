import React from 'react';
import AnimalParade from './AnimalParade';
import OpenandClosed from './OpenandClosed';
import { useState } from 'react';
import CustomButton from './CustomButton';

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
              <CustomButton onClick={() => setunicornSize(unicornSize + sizeModifier)}>
                Unicorn is powering up
              </CustomButton>
              <CustomButton onClick={() => setunicornSize(unicornSize - sizeModifier)}>
                Unicorn is hurt!
              </CustomButton>
            </div>
          </div>
          <div className="fight">
            <div className="monster">
              <img src="lion.png" width={lionSize * 10} />
              <div className="buttons" />
              <CustomButton onClick={() => setlionSize(lionSize + sizeModifier)}>
                Lion is powering up
              </CustomButton>
              <CustomButton onClick={() => setlionSize(lionSize - sizeModifier)}>
                Lion is hurt!
              </CustomButton>
            </div>
          </div>
        </div>
        <AnimalParade setAnimals={setAnimals} animals={animals} />
      </main>
    </div>
  );
}
