import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import ThemeToggle from '../components/ThemeToggle';
import Carousel from '../components/Carousel'; // Make sure this is the correct path
import '../App.css';

// Sample images for the carousel
const images = [
  'https://via.placeholder.com/600x300?text=First+Slide',
  'https://via.placeholder.com/600x300?text=Second+Slide',
  'https://via.placeholder.com/600x300?text=Third+Slide',
];

function HomePage() {
  return (
    <div className="main-page">
      <Header />
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
      <Footer />
    </div>
  );
}

export default HomePage;
