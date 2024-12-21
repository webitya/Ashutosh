import React from 'react';

const DyAboutSection = ({ heading, paragraphs }) => {
  return (
    <div
      className={` mx-auto p-5 rounded-lg shadow-lg bg-gray-100 text-gray-800`}
    >
      <h2 className="text-3xl  text-blue-800 mb-5">{heading}</h2>
      {paragraphs.map((paragraph, index) => (
        <p
          key={index}
          className={`mt-${index === 0 ? 0 : 4} text-base text-justify`}
        >
          {paragraph}
        </p>
      ))}
    </div>
  );
};

export default DyAboutSection;
