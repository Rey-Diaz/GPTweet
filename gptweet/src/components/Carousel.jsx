import PropTypes from 'prop-types';
import { CCarousel, CCarouselItem, CImage } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';

const CoreUICarousel = ({ images }) => {
  return (
    <CCarousel controls indicators>
      {images.map((image, index) => (
        <CCarouselItem key={index}>
          <CImage className="d-block w-100" src={image} alt={`slide-${index}`} />
        </CCarouselItem>
      ))}
    </CCarousel>
  );
};

// Define propTypes for CoreUICarousel component
CoreUICarousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carousel;
