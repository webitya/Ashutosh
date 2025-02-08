import React, { useRef } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DyRelatedProducts = ({ heading, cards }) => {
  const sliderRef = useRef(null); // Ref for controlling the slider programmatically

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false, // Disable default arrows
    responsive: [
      {
        breakpoint: 640, // For small devices (max-width: 640px)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    appendDots: (dots) => (
      <div className="absolute -bottom-6 right-5">
        <ul className="m-0 p-0 flex space-x-2">{dots}</ul>
      </div>
    ),
  };

  return (
    <div className="p-5 relative my-8">
      <h2 className="text-2xl font-bold text-blue-800 mb-5">{heading}</h2>
      <Slider ref={sliderRef} {...settings}>
        {cards.map((card, index) => (
          <div key={index} className="p-2 flex">
            <div
              className="relative flex flex-col justify-start h-full rounded-lg shadow-lg overflow-hidden"
              onMouseEnter={(e) =>
                (e.currentTarget.querySelector('.overlay').style.opacity = '0.8')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.querySelector('.overlay').style.opacity = '0')
              }
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-48 object-cover"
              />
              <Link to={card.link}>
                <div
                  className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg transition-opacity duration-300 overlay"
                  style={{
                    backgroundColor: card.overlayColor,
                    opacity: 0,
                  }}
                >
                  {card.overlayText}
                </div>
              </Link>
              <div className="mt-2 text-center text-lg font-bold text-gray-800">
                {card.title}
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="absolute -bottom-12 left-5 flex gap-2">
        <button
          className="px-4 py-2 text-blue-600 border border-blue-600 font-bold rounded-md"
          onClick={() => sliderRef.current.slickPrev()}
        >
          Prev
        </button>
        <button
          className="px-4 py-2 text-blue-600 border border-blue-600 font-bold rounded-md"
          onClick={() => sliderRef.current.slickNext()}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default DyRelatedProducts;
