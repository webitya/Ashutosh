import React from 'react';
import { Button } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 via-gray-300 to-yellow-500 animate-pulse opacity-20"></div>
      <div className="relative z-10 text-center">
        <div className="text-yellow-500 text-7xl mb-4">
          <HomeOutlined />
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-2">404 - Page Not Found</h1>
        <p className="text-lg text-gray-600 mb-6">
          Oops! Looks like this page is under construction. Please check back later or return to the homepage.
        </p>
        <Button  
          size="large" 
          icon={<HomeOutlined />} 
          href="/"
        >
          Go to Homepage
        </Button>
      </div>
    </div>
  );
};

export default PageNotFound;