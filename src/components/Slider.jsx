import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    dotsClass: "slick-dots custom-dots",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false, // Hide arrows on medium screens
          dots: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false, // Hide arrows on small screens
          dots: true,
        }
      },
    ]
  };

  return (
    <div className="w-full h-[500px] md:h-[600px] lg:h-[700px]">
      <Slider {...settings}>
        <div>
          <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D" alt="Slide 1" />
        </div>
        <div>
          <img className="w-full h-full object-cover" src="https://wallpapers.com/images/featured/laptop-murjp1nk4lp1idlt.jpg" alt="Slide 2" />
        </div>
        <div>
          <img className="w-full h-full object-cover" src="https://plus.unsplash.com/premium_photo-1678565999332-1cde462f7b24?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2dyYW1taW5nfGVufDB8fDB8fHww" alt="Slide 3" />
        </div>
      </Slider>
    </div>
  );
};

// Custom next arrow component
const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} bg-gray-800 rounded-full p-2 md:p-3 lg:p-4 hover:bg-gray-700 transition duration-300`}
      style={{ ...style, display: 'block', right: '10px', zIndex: 2, width: '40px', height: '40px', fontSize: '20px' }}
      onClick={onClick}
    />
  );
};

// Custom previous arrow component
const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} bg-gray-800 rounded-full p-2 md:p-3 lg:p-4 hover:bg-gray-700 transition duration-300`}
      style={{ ...style, display: 'block', left: '10px', zIndex: 2, width: '40px', height: '40px', fontSize: '20px' }}
      onClick={onClick}
    />
  );
};

export default Carousel;
