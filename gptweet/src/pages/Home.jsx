
import Carousel from '../components/Carousel/Carousel'; // Import the Carousel component
import RunButton from '../components/runButton/runButton'; // Import the RunButton component
import './Home.css'; // Import the CSS for styling

function Home() {
  return (
    <div className="home-container">
      <header className="landing-header">
        <h1>Welcome to GPTweet</h1>
        <p>Your go-to platform for AI-generated tweets</p>
      </header>
      <main className="landing-content">
        <section className="carousel-section">
          <h2>Discover Amazing AI-Generated Tweets</h2>
          <Carousel />
        </section>
        <section className="action-section">
          <h2>Get Started Now</h2>
          <p>Ready to experience the power of AI-generated tweets?</p>
          <div className="run-button-container">
            <RunButton />
          </div>
        </section>
      </main>
      <footer className="landing-footer">
        <p>&copy; {new Date().getFullYear()} GPTweet. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
