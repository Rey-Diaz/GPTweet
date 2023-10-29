import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import ThemeToggle from '../components/ThemeToggle';
import '../App.css';

function MainPage() {
  return (
    <div className="main-page">
      <Header />
      <div className="page-content">
        <Sidebar />
        <div className="content-area">
          <ThemeToggle />
          <Carousel images={images} />
          <div className="content">
            <h1>Welcome to Our App</h1>
            <p>This is a simple landing page that showcases what our app is about.</p>
            <button className="call-to-action">Get Started</button>
            <p className="alert-message">Important update: Our app is now better than ever!</p>
            {/* Add more content as needed */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MainPage;
