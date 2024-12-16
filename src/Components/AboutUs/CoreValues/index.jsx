import React from "react";

const CoreValues = () => {
  return (
    <section>
      {/* Core Values Top Bar */}
      <div className="grid grid-cols-4 text-white font-bold uppercase">
        <div className="bg-blue-900 p-4 text-center">
          <h3>Integrity</h3>
          <p className="text-sm font-normal mt-1">We do the right thing</p>
        </div>
        <div className="bg-blue-700 p-4 text-center">
          <h3>Commitment</h3>
          <p className="text-sm font-normal mt-1">We keep our word</p>
        </div>
        <div className="bg-teal-500 p-4 text-center">
          <h3>Respect</h3>
          <p className="text-sm font-normal mt-1">We value people</p>
        </div>
        <div className="bg-green-400 p-4 text-center">
          <h3>Excellence</h3>
          <p className="text-sm font-normal mt-1">We give our best</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-blue-900 text-white p-10 relative">
        {/* Left Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Employee Ownership</h2>
          <div className="flex items-center mb-4">
            <div className="border border-white rounded-full px-3 py-1 text-xl">
              100%
            </div>
            <p className="ml-4 text-lg">We are a 100% employee-owned company.</p>
          </div>
          <a href="#" className="uppercase font-bold text-white hover:underline">
            Learn More &nbsp; <span className="text-green-500">→</span>
          </a>
        </div>

        {/* Right Section with Quote */}
        <div className="mt-10">
          <blockquote className="text-lg italic mb-4">
            “Engineering is a very rewarding career. It has been a pleasure
            working within these communities, and I look forward to carrying
            that same energy to my employee-owner colleagues.”
          </blockquote>
          <p className="font-bold">ZANE GREEN</p>
          <p className="text-sm font-light">Operations Manager for Cody and Gillette offices</p>

          <a
            href="#"
            className="inline-block mt-4 uppercase font-bold border border-white px-4 py-2 hover:bg-white hover:text-blue-900 transition"
          >
            Join Our Team &nbsp; →
          </a>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
