import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import { useState } from 'react';
import './App.css';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="app-container">
      <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      <div className={`content-container ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        <Sidebar isOpen={isSidebarOpen} />
        <main className="main-content">
          <Home />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
