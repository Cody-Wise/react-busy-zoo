import React from 'react';
import AnimalEmoji from './AnimalEmoji';

export default function AnimalParade({ animals, setAnimals }) {
  return (
    <div>
      {animals.map((animal) => (
        <AnimalEmoji key={animal} animal={animal} />
      ))}
    </div>
  );
}
