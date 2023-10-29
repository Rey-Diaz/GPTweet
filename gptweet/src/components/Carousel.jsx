import { useState } from 'react';
import '../App.css';

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstImage = currentImageIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(newIndex);
  };

  const goToNext = () => {
    const isLastImage = currentImageIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(newIndex);
  };

  return (
    <div className="carousel-container">
      <button onClick={goToPrevious} className="carousel-button prev-button">&lt;</button>
      <img src={images[currentImageIndex]} alt="carousel" className="carousel-image" />
      <button onClick={goToNext} className="carousel-button next-button">&gt;</button>
    </div>
  );
};

export default Carousel;
