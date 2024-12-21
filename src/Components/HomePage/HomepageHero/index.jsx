import React, { useState, useEffect } from "react";

const HomeHeroSection = () => {
  const [currentNumber, setCurrentNumber] = useState("Water");
  const topics = [
    "SMART INFRASTRUCTURE",
    "CLIMATE CHANGE",
    "WATER MANAGEMENT",
    "MOBILITY (TRANSPORTATION)",
    "SMART INDUSTRY (INDUSTRY)"
  ];
  

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNumber((prev) => {
        const currentIndex = topics.indexOf(prev);
        return topics[(currentIndex + 1) % topics.length];
      });
    }, 1000); // Change every second

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [topics]);

  return (
    <section
      className="relative bg-black md:max-h-[75vh] md:min-h-[74vh] max-h-[220px] min-h-[219px]"
      title="Home Hero Section"
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      >
        <source src="/home.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white px-6">
        <h1 className="text-base md:text-xl uppercase tracking-widest mb-2">
          We Are
        </h1>
        <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-4">
          <span className="border-b-4 border-white pb-1">{currentNumber}</span>
        </h2>
        <p className="text-sm md:text-lg lg:text-2xl font-light">
          Creating solutions that build better communities.
        </p>
      </div>
    </section>
  );
};

export default HomeHeroSection;
