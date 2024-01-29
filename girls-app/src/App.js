
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Questions from './Questions';

function App() {

  return (
    <div className="App">
      <header className="App-header">
      <Navbar/>
      
      
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

    

      {/* Add more sections as needed */}
  
      </header>


    </div>
  );
}

export default App;
