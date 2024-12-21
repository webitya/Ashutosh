import { Filter } from "@mui/icons-material";
import React from "react";
import "tailwindcss/tailwind.css";

const LatestInsights = () => {
  // Data Array
  const insightsData = [
    {
      id: 1,
      title: "SE 2050 and What It Means for Us",
      imageUrl: "6.jpg", // Replace with actual image
      tag: "ARTICLE",
    },
    {
      id: 2,
      title: "3 Strategies for Effective Mass Timber Design",
      imageUrl: "10.jpg", // Replace with actual image
      tag: "ARTICLE",
    },
    {
      id: 3,
      title: "How to Develop a WPS",
      imageUrl: "12.jpg", // Replace with actual image
      tag: "ARTICLE",
    },
  ];

  return (
    <div className="bg-gray-100">
      <div
        className="mx-auto p-5 md:p-7"
        style={{
          backgroundImage: `url("./bgc_2.png")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        {/* Title */}
        <div className="flex items-center gap-3 mb-10">
          <Filter className="text-blue-900" fontSize="large" />
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            Our Latest Insights
          </h2>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Large Image */}
          <div className="relative group">
            <img
              src={insightsData[0].imageUrl}
              alt={insightsData[0].title}
              className="w-full h-auto rounded-lg transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg group-hover:shadow-2xl transition-all duration-300">
              <span className="text-xs font-bold text-blue-700">
                {insightsData[0].tag}
              </span>
              <h3 className="text-lg font-semibold mt-1 text-blue-900">
                {insightsData[0].title}
              </h3>
            </div>
          </div>

          {/* Two Smaller Images */}
          <div className="flex flex-col gap-6">
            {insightsData.slice(1).map((item) => (
              <div key={item.id} className="relative group">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-auto rounded-lg transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg group-hover:shadow-2xl transition-all duration-300">
                  <span className="text-xs font-bold text-blue-700">
                    {item.tag}
                  </span>
                  <h3 className="text-lg font-semibold mt-1 text-blue-900">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestInsights;
