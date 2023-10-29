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
      <Footer />
    </div>
  );
}

export default MainPage;
