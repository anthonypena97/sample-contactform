import Header from './components/Header';
import Contact from './components/Contact';
import React, { useState, useEffect } from 'react';

function App() {

  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);
  const [vh, setVh] = React.useState(window.innerHeight * 0.01);


  React.useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    return () => window.removeEventListener("resize", updateWidthAndHeight);

  });

  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    setVh(window.innerHeight * 0.01);

  };


  window.addEventListener('wheel', e => {
    e.preventDefault();
  }, { passive: false });

  // preventss user from scaling app
  window.addEventListener(
    "touchmove",
    function (event) {
      if (event.scale !== 1) {
        event.preventDefault();
      }
    },
    { passive: false }
  );

  window.addEventListener('gesturestart', e => e.preventDefault());
  window.addEventListener('gesturechange', e => e.preventDefault());
  window.addEventListener('gestureend', e => e.preventDefault());

  return (


    <div id="application">

      {/* for debugging */}
      {/* <div>{`1Window width = ${width}`}</div>
      <div>{`1Window height = ${height}`}</div> */}

      <Header></Header>

      <Contact></Contact>

    </div>

  );
}

export default App;
