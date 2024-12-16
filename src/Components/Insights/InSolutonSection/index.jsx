import React from "react";
import { Button } from "antd";

const InSolutionSection = () => {
  return (
    <section className="bg-white px-6 md:px-12 lg:px-20 py-12 text-gray-800">
      {/* Header */}
      <h2 className="text-3xl md:text-4xl font-bold text-blue-900 leading-tight mb-6">
        Creating a Solution That's Built Just for You
      </h2>

      {/* Paragraphs */}
      <div className="space-y-4 text-gray-700 text-base leading-relaxed">
        <p>
          Finding the best solutions for our clients and their communities is a challenge that
          drives us to succeed on all of our projects. That’s how we’ve done business from the
          beginning and what still motivates our employee-owners today.
        </p>
        <p>
          From our point of contact through our final project walk-through, we aim to design a
          sustainable solution that works for you now and well into the future. We design solutions
          that prioritize your community’s needs, focusing on value and getting the project right
          the first time.
        </p>
        <p>
          We’re ready to help you address your needs, not provide a solution that has solved someone
          else’s problems. Each project you see here is tailor-made with an eye on efficiency,
          function, and cost. This collection of our work is just a sample—if you don’t see what
          you’re looking for, don’t hesitate to contact us.
        </p>
      </div>

      {/* Projects Bidding Section */}
      <div className="mt-8">
        <h3 className="text-xl font-bold text-gray-800 mb-2">Projects Bidding</h3>
        <p className="text-gray-700 mb-4">
          Visit our projects bidding page to download digital project advertisements and securely
          deliver digital plans.
        </p>

        {/* Button */}
        <Button
          type="primary"
          size="large"
          className="bg-blue-900 hover:bg-blue-700 border-none rounded-none font-bold uppercase"
          href="/projects-bidding"
        >
          View Our Current Projects Bidding &nbsp; →
        </Button>
      </div>
    </section>
  );
};

export default InSolutionSection;
