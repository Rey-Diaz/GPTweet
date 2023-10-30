import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Effect to toggle the class on the body element
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]); // Depend on darkMode state

  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
  };

  // Removed themeClass as we are now toggling class on the body element
  return (
    <div className="flex flex-col min-h-screen">
      <Header onThemeToggle={handleThemeToggle} darkMode={darkMode} />
      <main className="flex-grow">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
