import '../app.css';

function Header() {
  return (
    <header className="header" style={{ backgroundColor: 'var(--brand-primary)' }}>
      {/* Logo placeholder */}
      <div className="logo">
        <img src="https://picsum.photos/200/100" alt="Company Logo" />  {/* Logo placeholder image */}
      </div>
      {/* Login/Logout Button */}
      <button className="login-logout-button">
        Login
      </button>
      {/* Profile Picture */}
      <div className="profile-picture">
        <img src="https://picsum.photos/100" alt="Profile" />  {/* Profile picture placeholder image */}
      </div>
    </header>
  );
}

export default Header;
