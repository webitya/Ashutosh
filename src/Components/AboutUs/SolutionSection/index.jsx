const SolutionsSection = () => {
    return (
      <section className="p-10 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Section: Heading */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 leading-snug">
              Solutions that Build <br /> Better Communities
            </h2>
          </div>
  
          {/* Right Section: Paragraphs */}
          <div className="text-gray-700 text-lg leading-relaxed">
            <p className="mb-4">
              At Morrison-Maierle, it’s not really about us—it’s about you and what
              is possible when we work together. Driven by a passion for creating
              solutions that build better communities, we see beyond individual
              projects to consider their place in your community—projects that can
              connect people, develop areas of belonging, build economies, and
              support community prosperity. This is why we exist.
            </p>
            <p>
              When you choose us, you’re not just selecting a consultant; you’re
              looking for a team to help you reach your goals. We value
              collaboration in the workplace and an integrated approach to our
              work—one that seeks to build trust, respect, and success.
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default SolutionsSection;
  