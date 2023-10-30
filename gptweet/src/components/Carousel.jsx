
import Slider from 'react-slick';

// Component CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  const imagePaths = [
    'https://picsum.photos/id/237/2000/300', // Image of a dog
    'https://picsum.photos/id/238/2000/300', // Image of a mountain
    'https://picsum.photos/id/239/2000/300', // Image of a tree
    // Add more image paths as needed
  ];

  return (
    <div className="container mx-auto">
      <Slider {...settings}>
        {imagePaths.map((src, index) => (
          <div key={index} className="px-2">
            <img src={src} alt={`Slide ${index}`} className="w-full h-auto" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
