import React from 'react';

const Navbar = () => {
    const handleScrollTo = (sectionId)=>{
        const section = document.getElementById(sectionId);
        if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const openGameInNewTab = () => {
        // Replace 'your-game-url' with the actual URL of your game
        const gameUrl = 'http://localhost:3000/';
        window.open(gameUrl, '_blank');
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
            </div>
        </nav>
     );
}
 
export default Navbar;