import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import ThemeToggle from '../components/ThemeToggle';

function MainPage() {
  return (
    <div className="main-page">
      <Header />
      <Sidebar />
      <ThemeToggle />
      {/* Other content */}
      <div className="content">
        <img src="https://picsum.photos/400/200" alt="Random Content" />  {/* Content placeholder image */}
      </div>
      <Footer />
    </div>
  );
}

export default MainPage;
