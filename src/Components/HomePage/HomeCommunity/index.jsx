import React from "react";
import "tailwindcss/tailwind.css";

const HomeCommunityLayout = () => {
  // Data Array
  const contentData = [
    {
      id: 1,
      title: "Become a Client",
      description:
        "Need assistance with a project? Partner with us to see what new opportunities we can create.",
      linkText: "LET'S TALK",
      link: "#",
    },
    {
      id: 2,
      title: "Build Your Career",
      description:
        "If you thrive on work that has a broader purpose, you’ve come to the right place.",
      linkText: "JOIN OUR TEAM",
      link: "#",
    },
  ];

  return (
    <div className="relative w-full bg-cover bg-center" style={{ backgroundImage: "url('/1.jpg')" }}>
      <div className="container mx-auto py-16 px-6">
        {/* Left Section */}
        <div className="text-white font-bold text-4xl md:text-5xl leading-tight max-w-md">
          <p>Building</p>
          <p>Better</p>
          <p>Communities</p>
          <p>Together</p>
        </div>

        {/* Cards Section */}
        <div className="mt-10 flex flex-col md:flex-row gap-6">
          {contentData.map((item) => (
            <div
              key={item.id}
              className="bg-white text-gray-800 p-6 rounded-lg shadow-lg w-full md:w-1/2"
            >
              <h3 className="text-xl font-bold mb-4 text-blue-900">
                {item.title}
              </h3>
              <p className="text-gray-600 mb-6">{item.description}</p>
              <a
                href={item.link}
                className="text-blue-600 font-semibold hover:underline"
              >
                {item.linkText} &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeCommunityLayout;
