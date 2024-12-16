import React from "react";
import { Button, Card } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import "tailwindcss/tailwind.css";

// Define the component
const CareerSection = () => {
  return (
    <section className="bg-gray-50 py-10 px-4 lg:px-20">
      {/* Career Heading */}
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h1 className="text-3xl lg:text-4xl font-bold text-blue-800 mb-4">
          Start Your Path Toward Building a Better Career
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          When you choose to work for Morrison-Maierle, you will embark on a career-defining journey
          in a beautiful location—one that will expose you to incredible people, projects, and
          places.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed">
          We will be firmly committed to your professional development and career success. Whether
          you're a new graduate or a professional with years of experience, working at
          Morrison-Maierle offers flexible work environments and resources to advance your career to
          the next level.
        </p>
      </div>

      {/* View Openings Button */}
      <div className="text-center mb-10">
        <Button
          type="primary"
          icon={<ArrowRightOutlined />}
          size="large"
          className="bg-blue-700 hover:bg-blue-800 text-white px-6"
        >
          VIEW OUR CURRENT OPENINGS
        </Button>
      </div>

      {/* Testimonial Card */}
      <div className="flex justify-center">
        <Card
          className="shadow-lg rounded-lg bg-gray-900 text-white max-w-3xl p-6 lg:p-10"
          bordered={false}
        >
          <div className="flex flex-col lg:flex-row items-center">
            {/* Profile Image */}
            <img
              src="https://via.placeholder.com/120" /* Replace with real image link */
              alt="Russell Williams"
              className="w-32 h-32 rounded-full mb-4 lg:mb-0 lg:mr-6"
            />

            {/* Quote and Details */}
            <div>
              <p className="italic text-lg mb-4 leading-relaxed">
                "I’m proud to work at Morrison-Maierle both for what we do and the positive impact
                we have in our communities. Knowing that we’re making a tangible difference in the
                lives of our families, colleagues, and neighbors is what makes this job so
                fulfilling."
              </p>
              <p className="font-bold text-blue-400">Russell Williams, PE</p>
              <p className="text-blue-300">Fire Protection Engineer</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CareerSection;
