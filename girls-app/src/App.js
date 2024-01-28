
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar/>
        <div className='content'>
          <Home/>
        </div>
        <div className='content'>
          <About/>
        </div>
      </header>
    </div>
  );
}

export default App;
