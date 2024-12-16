import React from 'react';

const HistorySection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center p-8 bg-white">
      {/* Image Section */}
      <div className="md:w-1/2 relative">
        <img
          src="image.png" 
          alt="John Morrison and Joe Maierle"
          className="w-full h-auto object-cover"
        />
        {/* Caption */}
        <div className="absolute bottom-0 bg-black bg-opacity-70 text-white text-sm p-4 w-full">
          <p>
            <strong>John Morrison</strong>, left, and <strong>Joe Maierle</strong> met at the 
            Montana Department of Transportation in the 1940s. John was the first licensed 
            engineer in Montana.
          </p>
        </div>
      </div>

      {/* Text Section */}
      <div className="md:w-1/2 md:pl-8 mt-6 md:mt-0">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">Our History</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Our story begins in a garage in Helena, Montana, where two men, John Morrison 
          and Joe Maierle, shared a vision for modern infrastructure in the American West. 
          There, they built the Morrison-Maierle of today, a 100% employee-owned, professional 
          services consulting firm offering engineering, surveying, planning, technology, 
          and science services.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Communities in the greater Rocky Mountains and Northwest are growing and need to 
          provide housing, water, power, commerce, transportation, and healthy environments. 
          We're ready to be the partner you need to create your community's next project.
        </p>
      </div>
    </div>
  );
};

export default HistorySection;
