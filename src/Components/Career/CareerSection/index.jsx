import React from "react";
import { Button, Card } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import "tailwindcss/tailwind.css";

// Define the component
const CareerSection = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-14 px-6 lg:px-20">
      {/* Career Heading */}
      <motion.div
        className="max-w-4xl mx-auto text-center mb-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl lg:text-5xl font-bold text-blue-800 mb-5 leading-tight">
          Start Your Path Toward Building a Better Career
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          At Morrison-Maierle, you’ll embark on a journey that defines your career, surrounded by
          breathtaking locations and remarkable projects. Be part of something that matters.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed">
          Whether you're a fresh graduate or an experienced professional, we provide flexible work
          environments and the tools to propel your career to new heights.
        </p>
      </motion.div>

      {/* View Openings Button */}
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Button
          type="primary"
          icon={<ArrowRightOutlined />}
          size="large"
          className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105"
          aria-label="View Current Openings"
        >
          VIEW OUR CURRENT OPENINGS
        </Button>
      </motion.div>

      {/* Testimonial Card */}
      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Card
          className="shadow-2xl rounded-xl bg-gray-900 text-white max-w-4xl p-6 lg:p-10 hover:shadow-3xl transition-shadow duration-300"
          bordered={false}
        >
          <div className="flex flex-col lg:flex-row items-center">
            {/* Profile Image */}
            <motion.img
              src="/careertop.jpg" /* Replace with a real image */
              alt="Russell Williams - Fire Protection Engineer"
              className="w-32 h-32 rounded-full mb-6 lg:mb-0 lg:mr-8 border-4 border-blue-500 shadow-lg"
              whileHover={{ scale: 1.1 }}
            />

            {/* Quote and Details */}
            <div className="text-center lg:text-left">
              <p className="italic text-lg mb-4 leading-relaxed">
                "I’m proud to work at Morrison-Maierle for what we do and the positive impact we have
                on our communities. Knowing we’re making a tangible difference in the lives of
                families, colleagues, and neighbors makes this job truly fulfilling."
              </p>
              <p className="font-bold text-blue-400 text-xl">Russell Williams, PE</p>
              <p className="text-blue-300">Fire Protection Engineer</p>
            </div>
          </div>
        </Card>
      </motion.div>
    </section>
  );
};

export default CareerSection;
