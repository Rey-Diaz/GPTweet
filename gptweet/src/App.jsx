
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  return (
    <div className="flex flex-col h-screen">
      {/* NavBar fixed to the top */}
      <NavBar />

      {/* Main content area - flex-grow allows it to expand to fill the space between NavBar and Footer */}
      {/* Padding top and bottom should be adjusted to the height of the NavBar and Footer respectively */}
      <main className="flex-grow overflow-y-auto pt-[height_of_navbar] pb-[height_of_footer]">
        <Home />
      </main>

      {/* Footer fixed to the bottom */}
      <Footer />
    </div>
  );
}

export default App;
