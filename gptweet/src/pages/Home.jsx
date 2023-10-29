import Carousel from '../components/Carousel'; // Import the Carousel component
import RunButton from '../components/RunButton'; // Import the RunButton component
import './Home.css'; // Import the CSS for styling

function Home() {
  return (
    <div className="home-container">
      <Carousel />
      <div className="run-button-container">
        <RunButton />
      </div>
    </div>
  );
}

export default Home;
