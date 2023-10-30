import NavBar from './components/NavBar/NavBar';
import Footer from './components/Core/Footer';
import Home from './pages/Home';

function App() {
  return (
    // Flex container with vertical direction
    <div className="flex flex-col min-h-screen">
      {/* Fixed NavBar at the top of the screen */}
      <div className="fixed top-0 w-full z-10">
        <NavBar />
      </div>

      {/* Main content with padding top to offset the fixed NavBar */}
      {/* The pt-* class should be adjusted based on the actual height of your NavBar */}
      {/* pb-* class should be adjusted based on the actual height of your Footer */}
      <main className="flex-grow pt-16 pb-14">
        <Home />
      </main>

      {/* Footer at the bottom */}
      {/* Fixed at the bottom of the viewport */}
      <div className="fixed bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
}

export default App;
