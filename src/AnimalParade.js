import React from 'react';
import AnimalEmoji from './AnimalEmoji';
import CustomButton from './CustomButton';

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
        ))}
      </div>
      <div className="animal-buttons">
        <CustomButton onClick={handleAddFrog}>Add Frog</CustomButton>
        <CustomButton onClick={handleAddBird}>Add Bird</CustomButton>
        <CustomButton onClick={handleAddAlligator}>Add Alligator</CustomButton>
      </div>
    </>
  );
}
