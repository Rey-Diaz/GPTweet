import PropTypes from 'prop-types'; // Import PropTypes
import Switch from '@mui/material/Switch';

const ThemeToggle = ({ onToggle, isDarkMode }) => {
  return (
    <Switch
      checked={isDarkMode}
      onChange={onToggle}
      color="default"
      inputProps={{ 'aria-label': 'toggle dark mode' }}
    />
  );
};

// Define the PropTypes
ThemeToggle.propTypes = {
  onToggle: PropTypes.func.isRequired,
  isDarkMode: PropTypes.bool.isRequired
};

export default ThemeToggle;
