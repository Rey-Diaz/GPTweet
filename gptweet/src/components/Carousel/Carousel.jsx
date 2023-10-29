import { CCarousel, CCarouselItem, CImage } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css'; // Import CoreUI CSS
import './Carousel.css';
// Define your image paths in an array
const imagePaths = [
  'https://picsum.photos/id/237/2000/300', // Image of a dog
  'https://picsum.photos/id/238/2000/300', // Image of a mountain
  'https://picsum.photos/id/239/2000/300', // Image of a tree
  // Add more image paths as needed
];

const Carousel = () => {
  return (
    <CCarousel controls indicators>
      {imagePaths.map((src, index) => (
        <CCarouselItem key={index}>
          <CImage className="d-block w-100" src={src} alt={`Slide ${index + 1}`} />
        </CCarouselItem>
      ))}
    </CCarousel>
  );
};

export default Carousel;
