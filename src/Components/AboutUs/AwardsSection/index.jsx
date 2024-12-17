import React from "react";

const AwardsSection = () => {
  return (
    <div className="relative w-full bg-gradient-to-r from-blue-900 to-blue-900 overflow-hidden">
      {/* Main Wrapper */}
      <div className="flex flex-col md:flex-row items-stretch">
        {/* Left Section */}
        <div className="bg-opacity-90 text-white p-10 md:p-16 flex-1 relative z-10">
          <h4 className="uppercase text-sm font-extrabold tracking-widest mb-4 text-green-400">
            Awards & Honors
          </h4>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-snug">
            Morrison-Maierle Wins <br />
            2024 Grand Project Award
          </h2>
          <p className="text-gray-300 mb-8 leading-relaxed text-lg">
            Celebrating our achievement with the Montana ACEC 2024 Grand Project
            Award for the Missoula Airport Terminal, along with three
            additional Engineering Excellence Awards.
          </p>
          <a
            href="#"
            className="inline-block text-lg text-green-400 font-bold border-b-2 border-green-400 hover:text-green-300 hover:border-green-300 transition-all duration-300"
          >
            Learn More &nbsp; &rarr;
          </a>
          {/* Decorative Element */}
          <div className="absolute top-0 bottom-0 right-0 w-20 bg-gradient-to-b from-transparent to-white opacity-30 transform skew-x-16 origin-top-right"></div>
        </div>

        {/* Right Section */}
        <div className="relative flex-1">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-50 z-10"></div>
          <img
            src="/bgdam.jpg" // Replace with actual image path
            alt="Award Winners"
            className="w-full h-full object-cover z-0"
          />
        </div>
      </div>

      {/* Floating Badge */}
      <div className="absolute top-8 right-8 bg-green-400 text-black font-bold text-xs uppercase py-2 px-4 rounded-full shadow-lg animate-pulse">
        2024 Excellence
      </div>
    </div>
  );
};

export default AwardsSection;
