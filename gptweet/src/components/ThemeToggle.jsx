import { useState } from 'react';
import '../App.css';
import 'ThemeToggle.css';

function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.style.setProperty('--current-bg', isDarkMode ? 'var(--brand-dark)' : 'var(--brand-light)');
  };

  return (
    <button className="theme-toggle-button" onClick={toggleTheme}>
      Toggle Theme
    </button>
  );
}

export default ThemeToggle;
