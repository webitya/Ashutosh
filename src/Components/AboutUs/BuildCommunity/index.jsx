import React from 'react';

const BuildCommunitySection = () => {
  return (
    <div
      className="relative bg-cover bg-center text-white"
      style={{
        backgroundImage: "url('image.png')", // Replace with actual image path
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-8 md:pt-16 md:pb-16 max-w-6xl mx-auto">
        {/* Left Section */}
        <div className="md:w-1/3 text-blue-900 font-bold text-4xl md:text-5xl mb-8 md:mb-0">
          <h1 className="leading-tight">
            Building <br />
            Better <br />
            Communities <br />
            Together
          </h1>
        </div>

        {/* Right Section */}
        <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-white shadow-lg p-6 rounded">
            <h2 className="text-blue-900 font-bold text-2xl mb-4">Become a Client</h2>
            <p className="text-gray-700 mb-4">
              Need assistance with a project? Partner with us to see what new opportunities
              we can create.
            </p>
            <a
              href="#"
              className="text-blue-600 font-bold border-b-2 border-blue-600 inline-block"
            >
              LET'S TALK →
            </a>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-lg p-6 rounded">
            <h2 className="text-blue-900 font-bold text-2xl mb-4">Build Your Career</h2>
            <p className="text-gray-700 mb-4">
              If you thrive on work that has a broader purpose, you've come to the right place.
            </p>
            <a
              href="#"
              className="text-blue-600 font-bold border-b-2 border-blue-600 inline-block"
            >
              JOIN OUR TEAM →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildCommunitySection;
