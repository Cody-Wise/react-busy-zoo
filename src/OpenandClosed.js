import React from 'react';
import CustomButton from './CustomButton';

export default function OpenandClosed({ isOpen, setisOpen }) {
  function handleOpenZoo() {
    setisOpen(true);
  }

  function handleCloseZoo() {
    setisOpen(false);
  }

  return (
    <div className="open-sign">
      <div>
        <h1>{isOpen ? 'Welcome to the Zoo!' : 'We are closed please go away!'}</h1>
      </div>
      <CustomButton onClick={handleOpenZoo}>Open Zoo</CustomButton>
      <CustomButton onClick={handleCloseZoo}>Close Zoo</CustomButton>
    </div>
  );
}
