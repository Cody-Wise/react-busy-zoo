import React from 'react';

export default function AnimalEmoji({ animal }) {
  return (
    <div>
      {animal === 'frog' && <span>🐸</span>}
      {animal === 'bird' && <span>🐦</span>}
      {animal === 'alligator' && <span>🐊</span>}
    </div>
  );
}
