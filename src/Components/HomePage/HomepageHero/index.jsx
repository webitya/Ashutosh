import React from "react";

const HomeHeroSection = () => {
  return (
    <div className="relative max-h-[75vh] min-h-[74vh] bg-black">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/home.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white px-6">
        <h2 className="text-xl uppercase tracking-widest mb-2">We Are</h2>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          <span className="border-b-4 border-white pb-1">Scientists</span>
        </h1>
        <p className="text-lg md:text-2xl font-light">
          Creating solutions that build better communities.
        </p>
      </div>
    </div>
  );
};

export default HomeHeroSection;
