import NavBar from './components/NavBar/NavBar';
import Footer from './components/Core/Footer';
import Home from './pages/Home';
import './App.css';

function App() {

  return (
    <div className="app-container">
      <NavBar />
  
        <main className="main-content">
          <Home />
        </main>
      
      <Footer />
    </div>
  );
}

export default App;
