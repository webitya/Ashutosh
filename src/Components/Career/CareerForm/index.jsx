import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const  CareerContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Submit form using EmailJS
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS Service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS Template ID
        {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        "YOUR_PUBLIC_KEY" // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setSuccessMessage("Your message has been sent successfully!");
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
          });
        },
        (error) => {
          console.error("FAILED...", error);
          setSuccessMessage("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="flex flex-col md:flex-row w-full bg-gray-100">
      {/* Left Section */}
      <div className="bg-blue-900 text-white p-8 md:p-12 w-full md:w-1/2">
        <h2 className="text-3xl font-bold mb-4">Let's Talk!</h2>
        <p className="text-gray-300 mb-6 leading-relaxed">
          You probably have specific questions about what a career might look
          like for you at Morrison-Maierle. If you're ready to take the next
          step, there are several ways to get information about us and career
          options, including using this form.
        </p>
        <p className="font-bold mb-1">Career Inquiries</p>
        <p>PHONE: <span className="text-gray-300">406-442-3050</span></p>
        <p>EMAIL: <a href="mailto:hello@m-m.net" className="text-green-400 hover:underline">hello@m-m.net</a></p>
      </div>

      {/* Right Section */}
      <div className="bg-gray-50 w-full md:w-1/2 p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-gray-700 mb-1">
                FIRST NAME *
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full border-gray-300 p-2 rounded shadow-sm"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-gray-700 mb-1">
                LAST NAME *
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full border-gray-300 p-2 rounded shadow-sm"
              />
            </div>
          </div>

          {/* Email and Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-1">
                EMAIL ADDRESS *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border-gray-300 p-2 rounded shadow-sm"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-gray-700 mb-1">
                PHONE NUMBER *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full border-gray-300 p-2 rounded shadow-sm"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-gray-700 mb-1">
              MESSAGE *
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              maxLength="250"
              required
              className="w-full border-gray-300 p-2 rounded shadow-sm"
            ></textarea>
            <p className="text-gray-500 text-sm mt-1">
              {formData.message.length} of 250 max characters
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700 transition-all duration-300"
          >
            SUBMIT
          </button>

          {/* Success Message */}
          {successMessage && (
            <p className="text-green-600 font-semibold">{successMessage}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default CareerContactForm;
