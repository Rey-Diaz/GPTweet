import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import './App.css';
import Carousel from './components/Carousel';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Effect to toggle the class on the body element and set background color
  useEffect(() => {
    // Set the background color directly on the body element
    const backgroundColor = darkMode ? '#121212' : '#ffffff'; // Use your dark and light background colors
    document.body.style.backgroundColor = backgroundColor;

    // Toggle the dark-mode class for content colors
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]); // This effect runs when darkMode state changes

  const handleThemeToggle = () => {
    setDarkMode(!darkMode); // Toggle the darkMode state
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header onThemeToggle={handleThemeToggle} darkMode={darkMode} />
      <main className="flex-grow">
        <Home />
        <Carousel />
      </main>
      <Footer />
    </div>
  );
}

export default App;
