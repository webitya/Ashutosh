import React from "react";
import { Typography } from "antd";

const { Title, Text } = Typography;

const AboutHero = () => {
  return (
    <section className="relative h-[400px] bg-cover bg-center flex items-center" 
      style={{ backgroundImage: "url('https://your-image-url.com')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 px-8 md:px-16 lg:px-24 text-white">
        <Text className="uppercase tracking-widest text-gray-300 text-sm">
          About Us
        </Text>
        <Title level={1} className="text-white font-bold mt-2">
          Firm Overview
        </Title>
      </div>
    </section>
  );
};

export default AboutHero;
