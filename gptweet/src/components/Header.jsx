import '../app.css';

function Header() {
  return (
    <header className="header" style={{ backgroundColor: 'var(--brand-primary)' }}>
      {/* Logo placeholder */}
      <div className="logo">
        <img src="logo-placeholder.png" alt="Company Logo" />
      </div>
      {/* Login/Logout Button */}
      <button className="login-logout-button">
        Login
      </button>
      {/* Profile Picture */}
      <div className="profile-picture">
        <img src="profile-placeholder.png" alt="Profile" />
      </div>
    </header>
  );
}

export default Header;
