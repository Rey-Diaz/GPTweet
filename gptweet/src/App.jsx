import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="content-container">
        <Sidebar />
        <div className="main-content">
          <Home />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
