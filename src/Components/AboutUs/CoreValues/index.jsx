import React from "react";

const CoreValues = () => {
  return (
    <section className="w-full">
      {/* Core Values Top Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-white font-bold uppercase">
        {/* Integrity */}
        <div className="bg-blue-900 p-6 text-center hover:scale-105 transition-transform duration-300">
          <h3 className="text-lg md:text-xl">Integrity</h3>
          <p className="text-sm font-normal mt-2 opacity-80">
            We do the right thing
          </p>
        </div>

        {/* Commitment */}
        <div className="bg-blue-700 p-6 text-center hover:scale-105 transition-transform duration-300">
          <h3 className="text-lg md:text-xl">Commitment</h3>
          <p className="text-sm font-normal mt-2 opacity-80">
            We keep our word
          </p>
        </div>

        {/* Respect */}
        <div className="bg-teal-500 p-6 text-center hover:scale-105 transition-transform duration-300">
          <h3 className="text-lg md:text-xl">Respect</h3>
          <p className="text-sm font-normal mt-2 opacity-80">
            We value people
          </p>
        </div>

        {/* Excellence */}
        <div className="bg-green-400 p-6 text-center hover:scale-105 transition-transform duration-300">
          <h3 className="text-lg md:text-xl">Excellence</h3>
          <p className="text-sm font-normal mt-2 opacity-80">
            We give our best
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-blue-900 text-white p-6 md:p-10 flex flex-col lg:flex-row justify-between relative">
        {/* Left Section */}
        <div className="mb-8 lg:mb-0 lg:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Employee Ownership
          </h2>
          <div className="flex items-center mb-6">
            <div className="border-2 border-white rounded-full px-4 py-2 text-2xl font-bold">
              100%
            </div>
            <p className="ml-4 text-base md:text-lg">
              We are a 100% employee-owned company.
            </p>
          </div>
          <a
            href="#"
            className="inline-block uppercase font-bold text-white hover:underline"
            aria-label="Learn more about Employee Ownership"
          >
            Learn More &nbsp; <span className="text-green-500">→</span>
          </a>
        </div>

        {/* Right Section with Quote */}
        <div className="lg:w-1/2">
          <blockquote className="text-lg md:text-xl italic mb-4 leading-relaxed">
            “Engineering is a very rewarding career. It has been a pleasure
            working within these communities, and I look forward to carrying
            that same energy to my employee-owner colleagues.”
          </blockquote>
          <p className="font-bold text-lg">ZANE GREEN</p>
          <p className="text-sm font-light opacity-80">
            Operations Manager for Cody and Gillette offices
          </p>

          <a
            href="#"
            className="inline-block mt-6 uppercase font-bold border border-white px-4 py-2 hover:bg-white hover:text-blue-900 transition-colors duration-300"
            aria-label="Join our team"
          >
            Join Our Team &nbsp; →
          </a>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
