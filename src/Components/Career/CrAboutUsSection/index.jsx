import React, { useState } from "react";
import { Button, Image } from "antd";
import { FullscreenOutlined, CloseOutlined } from "@ant-design/icons";
import "tailwindcss/tailwind.css";

const AboutUsSection = () => {
  const [visible, setVisible] = useState(false); // State to control image preview visibility

  return (
    <section className="bg-white py-12 px-4 lg:px-20">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Text Section */}
        <div className="max-w-lg">
          <h2 className="text-3xl lg:text-4xl font-bold text-blue-800 mb-4">
            Learn More About Us
          </h2>
          <p className="text-gray-600 text-lg mb-4 leading-relaxed">
            Morrison-Maierle employee-owners have the opportunity to be part of a successful,
            growing company with top-notch benefits and many opportunities for professional
            advancement.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our Building Better Careers resource guide provides more information about resources to
            help you succeed as you build your career. Click on the image to expand the guide.
          </p>
        </div>

        {/* Interactive Image Section */}
        <div className="relative group">
          <Image
            src="https://via.placeholder.com/500x300" // Replace with your actual image URL
            alt="Building Better Careers"
            preview={{
              visible: visible,
              onVisibleChange: (vis) => setVisible(vis), // Control visibility
            }}
            className="rounded-lg shadow-lg cursor-pointer"
          />
          {/* Overlay with Fullscreen Button */}
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
            <Button
              type="primary"
              icon={<FullscreenOutlined />}
              size="large"
              className="bg-white text-black hover:bg-gray-300"
              onClick={() => setVisible(true)} // Open Image Preview
            >
              Full Screen
            </Button>
          </div>
        </div>

        {/* Close Button for Fullscreen Image */}
        {visible && (
          <Button
            icon={<CloseOutlined />}
            className="fixed top-4 right-4 z-50 bg-white text-gray-800 hover:bg-gray-300"
            onClick={() => setVisible(false)} // Close Image Preview
          >
            Close
          </Button>
        )}
      </div>
    </section>
  );
};

export default AboutUsSection;
