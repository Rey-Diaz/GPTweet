// App.jsx
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
  };

  const themeClass = darkMode ? 'bg-brand-dark text-white' : 'bg-brand-light text-brand-dark';

  return (
    <div className={`flex flex-col min-h-screen ${themeClass}`}>
      <Header onThemeToggle={handleThemeToggle} />
      <main className="flex-grow">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
