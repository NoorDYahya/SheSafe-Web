
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Questions from './Questions';
import ScrollIndicator from './ScrollIndicator';
import ContactUs from './ContactUs';


function HomePage() {

  return (
    <div className="App">
      <header className="App-header">
      <Navbar/>
      <ScrollIndicator /> 
      
      <section id="home" className="section">
        <div className="content">
          <Home />
        </div>
      </section>

      <section id="questions" className="section">
        <div className="content">
          <Questions/>
        </div>
      </section>

      <section id="about" className="section">
        <div className="content">
          <About />
        </div>
      </section>
      <section id="ContactUs" className="section">
        <div className="content">
          <div id="contact"><br/><br/><br/><br/></div>
          <div className="contact"> <h1>Contact Us </h1></div>
          <ContactUs />
        </div>
      </section>

    

      {/* Add more sections as needed */}
  
      </header>


    </div>
  );
}

export default HomePage;
