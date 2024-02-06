import React, { useState } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Questions from './Questions';
import ScrollIndicator from './ScrollIndicator';
import ContactUs from './ContactUs';
import LoginPage from './LoginPage'; // Import your LoginPage component

function HomePage() {
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  const openLoginPopup = () => {
    console.log("opeen!");
    setShowLoginPopup(true);
  };

  const closeLoginPopup = () => {
    setShowLoginPopup(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Navbar openLoginPopup={openLoginPopup} /> {/* Pass openLoginPopup function as prop */}
        <ScrollIndicator />

        <section id="home" className="section">
          <div className="content">
            <Home />
          </div>
        </section>

        <section id="questions" className="section">
          <div className="content">
            <Questions />
          </div>
        </section>

        <section id="about" className="section">
          <div className="content">
            <About />
          </div>
        </section>

        <section id="ContactUs" className="section">
          <div className="content">
            <div id="contact"><br /><br /><br /><br /></div>
            <div className="contact"> <h1>Contact Us </h1></div>
            <ContactUs />
          </div>
        </section>

        {/* Add more sections as needed */}
      </header>

      {showLoginPopup && <LoginPage closeLoginPopup={closeLoginPopup} />} {/* Pass closeLoginPopup function as prop */}
    </div>
  );
}

export default HomePage;