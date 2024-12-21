import React from "react";
import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  YoutubeOutlined,
  MailOutlined,
  SendOutlined,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <div className="bg-gray-50 text-gray-800 !pt-14">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto py-2 px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Tagline */}
        <div>
          <h1 className="text-3xl font-bold text-blue-900 mb-1"><span className="font-semibold">A S U T O S </span></h1>
          <p className="text-sm text-gray-600 leading-relaxed">
            engineers • surveyors • planners • scientists
          </p>
        </div>

        {/* Contact and Newsletter */}
        <div className="space-y-1">
          {[
            {
              title: "Get In Touch",
              text: "Questions? Inquiries? Let's talk!",
              buttonText: "Contact Us",
              icon: <MailOutlined className="ml-2" />,
            }
          ].map((item, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.text}</p>
              <button
                className="mt-4 flex items-center justify-center px-2 py-1 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 shadow-md transition-transform transform hover:scale-105"
                aria-label={item.buttonText}
              >
                {item.buttonText} {item.icon}
              </button>
            </div>
          ))}
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Stay Connected</h3>
          <p className="text-sm text-gray-600 mb-4">
            Follow us on our social media platforms.
          </p>
          <div className="flex space-x-6 text-blue-600">
            {[
              { icon: <FacebookOutlined />, label: "Facebook" },
              { icon: <InstagramOutlined />, label: "Instagram" },
              { icon: <LinkedinOutlined />, label: "LinkedIn" },
              { icon: <YoutubeOutlined />, label: "YouTube" },
            ].map((social, index) => (
              <div
                key={index}
                className="text-2xl cursor-pointer hover:text-blue-800 transition-colors duration-300"
                aria-label={social.label}
              >
                {social.icon}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Banner */}
      <div className="bg-blue-900 text-white py-4 px-6 select-none flex flex-col sm:flex-row items-center justify-between">
        <p className="text-sm text-center sm:text-left">
          Copyright © 2024 <span className="font-semibold">A S U T O S </span>  | Montana • Oregon • Washington • Wyoming
        </p>
        <div className="bg-gray-200 text-gray-700 py-2 px-4 text-center text-sm rounded-sm">
        <p>
          Designed by{" "}
          <a
            href="https://webitya.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-semibold"
          >
            Webitya
          </a>
        </p>
      </div>
      </div>

      {/* Credits Section */}
      {/* <div className="bg-gray-200 text-gray-700 py-3 text-center text-sm">
        <p>
          Website design by{" "}
          <a
            href="https://webitya.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Webitya
          </a>
        </p>
      </div> */}
    </div>
  );
};

export default Footer;
