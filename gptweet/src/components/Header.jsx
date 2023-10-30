
import PropTypes from 'prop-types'; // Import PropTypes
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ThemeToggle from './ThemeToggle'; // Import the ThemeToggle component

const Header = ({ onThemeToggle, darkMode }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          GPTweet
        </Typography>
        {/* Theme toggle switch */}
        <ThemeToggle onToggle={onThemeToggle} isDarkMode={darkMode} />
        <IconButton edge="end" color="inherit">
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

// Define the PropTypes
Header.propTypes = {
  onThemeToggle: PropTypes.func.isRequired,
  darkMode: PropTypes.bool.isRequired
};

export default Header;
