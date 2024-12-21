import React from 'react';

const DyServices = ({ heading, services }) => {
  return (
    <div className="bg-blue-900 text-white p-6 leading-relaxed">
      <h2 className="text-3xl font-bold mb-6 text-center">{heading}</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 list-none">
        {services.map((service, index) => (
          <li key={index} className="flex items-start space-x-2">
            <span className="text-green-400 font-bold">•</span>
            <span>{service}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DyServices;
