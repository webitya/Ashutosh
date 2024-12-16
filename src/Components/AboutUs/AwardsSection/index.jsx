import React from "react";

const AwardsSection = () => {
  return (
    <div className="relative w-full bg-white overflow-hidden">
      {/* Main Wrapper */}
      <div className="flex flex-col md:flex-row items-stretch">
        {/* Left Section */}
        <div className="bg-blue-900 text-white p-8 md:p-12 flex-1 relative">
          <h4 className="uppercase text-sm font-bold tracking-wide mb-4">
            Awards & Honors
          </h4>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Morrison-Maierle Receives <br />
            2024 Grand Project Award
          </h2>
          <p className="text-gray-200 mb-6 leading-relaxed">
            Morrison-Maierle received the Montana ACEC 2024 Grand Project Award
            for the Missoula Airport Terminal and Three Additional Engineering
            Excellence Awards.
          </p>
          <a
            href="#"
            className="inline-block text-white font-bold border-b-2 border-green-400 hover:text-green-400 transition duration-300"
          >
            LEARN MORE &nbsp; &rarr;
          </a>
          {/* Diagonal Shape */}
          <div className="absolute top-0 bottom-0 right-0 w-16 bg-white transform skew-x-12 origin-top-right"></div>
        </div>

        {/* Right Section */}
        <div className="relative flex-1">
          <img
            src="image.png" // Replace with actual image path
            alt="Award Winners"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AwardsSection;
