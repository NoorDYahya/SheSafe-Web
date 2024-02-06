import React from 'react';
import { useNavigate } from 'react-router';

const Navbar = ({ openLoginPopup }) => {
  const navigate = useNavigate();

  const handleScrollTo = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openGameInNewTab = () => {
    // Replace 'your-game-url' with the actual URL of your game
    const username = localStorage.getItem('username');
    const gameUrl = `http://localhost:3001/?username=${username}`;
    window.open(gameUrl, '_blank');
  };

  const handleLoginClick = () => {
    console.log("Login button clicked");
    openLoginPopup(); // Trigger the openLoginPopup function passed as a prop
  };

  return (
    <nav className="navbar">
      <h1 onClick={() => handleScrollTo('home')}>SheSafe</h1>
      <div className="links">
        <button onClick={() => handleScrollTo('home')}>Home</button>
        <button onClick={openGameInNewTab}>Game</button>
        <button onClick={() => handleScrollTo('questions')}>Tips for safety</button>
        <button onClick={() => handleScrollTo('AboutId')}>About</button>
        <button onClick={() => handleScrollTo('contact')}>Contact Us</button>
        <button id = "LogIn" onClick={handleLoginClick}>Login</button> {/* Call handleLoginClick function */}
      </div>
    </nav>
  );
}

export default Navbar;