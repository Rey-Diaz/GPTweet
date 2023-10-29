import '../App.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="https://picsum.photos/200/100" alt="Company Logo" />
      </div>
      <button className="login-logout-button">Login</button>
      <div className="profile-picture">
        <img src="https://picsum.photos/100" alt="Profile" />
      </div>
    </header>
  );
}

export default Header;
