import React from 'react';

const DyHeroSection = ({ title, subtitle, backgroundImage }) => {
  return (
    <div
      className="relative flex items-center justify-center h-[350px] text-center text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10">
        <h2 className="text-3xl sm:text-2xl font-medium">{title}</h2>
        <h1 className="text-3xl sm:text-5xl font-bold mt-2">{subtitle}</h1>
      </div>
    </div>
  );
};

export default DyHeroSection;
