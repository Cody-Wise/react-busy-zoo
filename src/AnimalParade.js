import React from 'react';
import AnimalEmoji from './AnimalEmoji';

export default function AnimalParade({ animals, setAnimals }) {
  function handleAddFrog() {
    animals.push('frog');
    setAnimals([...animals]);
  }

  function handleAddBird() {
    animals.push('bird');
    setAnimals([...animals]);
  }

  function handleAddAlligator() {
    animals.push('alligator');
    setAnimals([...animals]);
  }
  return (
    <>
      <h3>Animal Parade Every Hour</h3>
      <div className="animal">
        {animals.map((animal) => (
          <AnimalEmoji key={animal} animal={animal} />
        ))}{' '}
      </div>
      <div className="animal-buttons">
        <button onClick={handleAddFrog}>Add Frog</button>
        <button onClick={handleAddBird}>Add Bird</button>
        <button onClick={handleAddAlligator}>Add Alligator</button>
      </div>
    </>
  );
}
