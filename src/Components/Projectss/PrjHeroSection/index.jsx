import React from "react";

const PrjHeroSection = () => {
  return (
    <section
      className="relative w-full h-[300px] md:h-[200px] lg:h-[250px] bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `url('https://your-image-link.com')`, // Replace with your image link
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Text */}
      <div className="relative z-10 px-6 md:px-12 lg:px-20">
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold">
          Projects
        </h1>
      </div>
    </section>
  );
};

export default PrjHeroSection;
