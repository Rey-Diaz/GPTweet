import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';

const Header = ({ onThemeToggle }) => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'var(--brand-primary)', color: 'var(--brand-light)' }}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ marginRight: '12px' }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My React App
        </Typography>
        {/* Theme toggle switch */}
        <Switch
          color="default"
          onChange={onThemeToggle}
          inputProps={{ 'aria-label': 'theme toggle' }}
        />
        <IconButton
          edge="end"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  onThemeToggle: PropTypes.func.isRequired,
};

export default Header;
