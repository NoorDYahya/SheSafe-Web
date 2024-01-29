import React, { useEffect } from "react";

const ScrollIndicator = () => {


    useEffect(() =>{
        const scrollIndicator = document.getElementById('scroll-indicator');
    
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
          
            // Calculate how far the user has scrolled
            const scrollPercentage = (scrollPosition / (documentHeight - windowHeight)) * 100;
          
            // Show/hide the scroll indicator based on the scroll percentage
            scrollIndicator.style.display = 'block';
          
            // Adjust the width of the progress line
            scrollIndicator.style.width = `${scrollPercentage}%`;
          
        };
    
        // Attach the scroll event listener
        window.addEventListener('scroll', handleScroll);
    
        // Clean up the event listener on component unmount
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []); // Empty dependency array ensures the effect runs only once
    
      return (
        <div className="scroll-indicator" id="scroll-indicator">
          <div className="indicator"></div>
        </div>
      );
    };
    export default ScrollIndicator;    
