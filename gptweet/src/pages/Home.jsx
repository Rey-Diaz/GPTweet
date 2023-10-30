import Carousel from '../components/Carousel/Carousel'; // Import the Carousel component
import RunButton from '../components/runButton/runButton'; // Import the RunButton component

function Home() {
  return (
    <div className="container mx-auto px-4">
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to GPTweet</h1>
        <p className="text-gray-600 mt-3">Your go-to platform for AI-generated tweets</p>
      </header>
      <main>
        <section className="my-8">
          <h2 className="text-2xl font-semibold text-gray-800">Discover Amazing AI-Generated Tweets</h2>
          <Carousel />
        </section>
        <section className="my-8">
          <h2 className="text-2xl font-semibold text-gray-800">Get Started Now</h2>
          <p className="text-gray-600 mt-3">Ready to experience the power of AI-generated tweets?</p>
          <div className="flex justify-center mt-6">
            <RunButton />
          </div>
        </section>
      </main>
      <footer className="text-center py-6">
        <p className="text-gray-600">&copy; {new Date().getFullYear()} GPTweet. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
