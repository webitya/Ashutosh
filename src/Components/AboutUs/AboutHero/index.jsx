import React from "react";
import { Typography } from "antd";

const { Title, Text } = Typography;

const AboutHero = () => {
  return (
    <section className="relative h-[300px] bg-cover bg-center flex items-center" 
      style={{ backgroundImage: "url('/abbg.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 px-8 md:px-16 lg:px-24 text-white">
        <Text className="uppercase tracking-widest text-white text-2xl ">
          About Us
        </Text>
        <Title className="!text-white text-4xl font-bold mt-2">
          Firm Overview
        </Title>
      </div>
    </section>
  );
};

export default AboutHero;
