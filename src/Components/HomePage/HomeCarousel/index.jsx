import React from "react";
import { Carousel } from "antd";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import "tailwindcss/tailwind.css";

const HomeCarousel = () => {
  const carouselRef = React.useRef();

  const goNext = () => carouselRef.current.next();
  const goPrev = () => carouselRef.current.prev();

  // Carousel Data
  const carouselData = [
    {
      id: 1,
      category: "Water Management",
      title:
        "Lockwood Water and Sewer District Water Treatment Plant Upgrade Project",
      description:
        "In response to its expanding population, Morrison-Maierle designed a major enhancement for the Lockwood Water and Sewer District's treatment facility.",
      image: "./slider_img.jpg",
    },
    {
        id: 1,
        category: "Water Management",
        title:
          "Lockwood Water and Sewer District Water Treatment Plant Upgrade Project",
        description:
          "In response to its expanding population, Morrison-Maierle designed a major enhancement for the Lockwood Water and Sewer District's treatment facility.",
        image: "./slider_img.jpg",
      },
      {
        id: 1,
        category: "Water Management",
        title:
          "Lockwood Water and Sewer District Water Treatment Plant Upgrade Project",
        description:
          "In response to its expanding population, Morrison-Maierle designed a major enhancement for the Lockwood Water and Sewer District's treatment facility.",
        image: "./slider_img.jpg",
      },
  ];

  return (
    <div className="relative w-full mx-auto mt-5">
      {/* Carousel */}
      <Carousel ref={carouselRef} autoplay>
        {carouselData.map((slide) => (
          <div key={slide.id}>
            <div className="flex flex-col md:flex-row bg-blue-900 text-white p-6 md:py-20 items-center">
              {/* Text Content */}
              <div className="w-full md:w-1/2 text-center md:text-left">
                <span className="uppercase text-sm font-semibold text-teal-400">
                  {slide.category}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold mt-4">
                  {slide.title}
                </h2>
                <p className="mt-4 text-gray-300">{slide.description}</p>
                <button className="mt-6 text-teal-400 hover:underline">
                  LEARN MORE &rarr;
                </button>
              </div>

              {/* Image Content */}
              <div className="w-full md:w-1/2 mt-6 md:mt-0 flex justify-center">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="rounded-lg w-full max-w-md"
                />
              </div>
            </div>
          </div>
        ))}
      </Carousel>

      {/* Navigation Arrows */}
      <div className="absolute bottom-4 right-4 flex gap-2">
        <button
          onClick={goPrev}
          className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full text-white"
        >
          <ArrowLeft fontSize="small" />
        </button>
        <button
          onClick={goNext}
          className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full text-white"
        >
          <ArrowRight fontSize="small" />
        </button>
      </div>
    </div>
  );
};

export default HomeCarousel;
