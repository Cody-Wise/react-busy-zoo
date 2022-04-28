import React from 'react';

export default function OpenandClosed({ isOpen, setisOpen }) {
  function handleOpenZoo() {
    setisOpen(true);
  }

  function handleCloseZoo() {
    setisOpen(false);
  }

  return (
    <div>
      <div>{isOpen ? 'Welcome to the Zoo!' : 'We are closed please go away!'}</div>
      <button onClick={handleOpenZoo}>Open Zoo</button>
      <button onClick={handleCloseZoo}>Close Zoo</button>
    </div>
  );
}
