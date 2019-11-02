import React from 'react';

import useDarkMode  from '../hooks/useDarkMode';



const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);

  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      
      <h1 className="title">Women's World Cup</h1>
        <h2>Player Rank</h2>
       
        <a href="https://github.com/J2Macwilliams/Sprint-Challenge-Advanced-React/pull/1" >
                <button className="button">Code</button>
            </a>
            <a href="https://j2macwilliams.github.io/My-Portfolio/" >
                <button className="button">Portfolio</button>
            </a>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;