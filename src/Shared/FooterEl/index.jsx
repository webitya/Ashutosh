import React from "react";
import { FacebookOutlined, InstagramOutlined, LinkedinOutlined, YoutubeOutlined } from "@ant-design/icons";

const Footer = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto py-10 px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Tagline */}
        <div>
          <h1 className="text-3xl font-bold text-blue-900 mb-3">Morrison Maierle</h1>
          <p className="text-sm text-gray-600 leading-relaxed">
            engineers • surveyors • planners • scientists
          </p>
        </div>

        {/* Contact and Newsletter */}
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Get In Touch</h3>
            <p className="text-sm text-gray-600">Questions? Inquiries? Let's talk!</p>
            <button className="mt-4 px-5 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 shadow-lg">
              Contact Us
            </button>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Newsletter</h3>
            <p className="text-sm text-gray-600">
              Stay up to date with our insights, projects, and news.
            </p>
            <button className="mt-4 px-5 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 shadow-lg">
              Sign Up
            </button>
          </div>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Stay Connected</h3>
          <p className="text-sm text-gray-600 mb-4">
            Follow us on our social media platforms.
          </p>
          <div className="flex space-x-6 text-blue-600">
            <FacebookOutlined className="text-2xl cursor-pointer hover:text-blue-800" />
            <InstagramOutlined className="text-2xl cursor-pointer hover:text-blue-800" />
            <LinkedinOutlined className="text-2xl cursor-pointer hover:text-blue-800" />
            <YoutubeOutlined className="text-2xl cursor-pointer hover:text-blue-800" />
          </div>
        </div>
      </div>

      {/* Cookie Consent */}
      <div className="bg-blue-900 text-white py-4 px-6 flex flex-col sm:flex-row items-center justify-between">
        <p className="text-sm text-center sm:text-left">
          We are using cookies to give you the best experience on our website. You can find out more about which cookies we are using or switch them off in {" "}
          <a href="#" className="underline hover:text-gray-200">settings</a>.
        </p>
        <button className="mt-4 sm:mt-0 px-5 py-2 bg-blue-600 text-sm rounded hover:bg-blue-700 shadow-lg">
          Accept
        </button>
      </div>

      {/* Credits */}
      <div className="bg-gray-200 text-gray-700 py-4 px-6 text-center text-sm">
        <p className="font-medium">
          Website Developed by <a href="https://webitya.com" className="text-blue-600 hover:underline">Webitya</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;