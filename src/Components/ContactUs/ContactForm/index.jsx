import React, { useState } from "react";
import emailjs from "emailjs-com";

const formFields = [
  { name: "firstName", label: "First Name", type: "text", required: true },
  { name: "lastName", label: "Last Name", type: "text", required: true },
  { name: "email", label: "Email Address", type: "email", required: true },
  { name: "city", label: "City", type: "text", required: true },
  { name: "state", label: "State", type: "select", required: true, options: ["Alabama", "Alaska", "California", "Florida"] },
  { name: "phoneNumber", label: "Phone Number", type: "tel", required: true },
  { name: "inquiryType", label: "Inquiry Type", type: "select", required: true, options: ["Projects", "Support", "Feedback"] },
  { name: "message", label: "Message", type: "textarea", required: true, maxLength: 250 },
];

const ContactForm = () => {
  const [formData, setFormData] = useState(
    formFields.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {})
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formData,
        "YOUR_USER_ID"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
        },
        (error) => {
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
      {/* Left Section */}
      <div className="bg-blue-900 text-white p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">Let's Talk!</h2>
        <p className="mb-6">
          You've come to the right place if you need more information about our work, services, or career development.
        </p>
        <div>
          <h3 className="text-xl font-semibold">General Info</h3>
          <p>Phone: (406) 442-3050</p>
          <p>Email: hello@m-m.net</p>
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-semibold">Career Inquiries</h3>
          <p>Phone: (406) 442-3050</p>
          <p>Email: hello@m-m.net</p>
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-semibold">Media & New Business Inquiries</h3>
          <p>Phone: (406) 542-8880</p>
          <p>Email: hello@m-m.net</p>
        </div>
        <div className="mt-6 flex space-x-4">
          <a href="#" className="text-green-400">Facebook</a>
          <a href="#" className="text-green-400">LinkedIn</a>
          <a href="#" className="text-green-400">Instagram</a>
          <a href="#" className="text-green-400">YouTube</a>
        </div>
      </div>

      {/* Right Section */}
      <div className="bg-gray-100 p-8 rounded-lg">
        <form onSubmit={handleSubmit} className="space-y-4">
          {formFields.map((field) => (
            <div key={field.name}>
              <label className="block text-sm font-medium mb-1" htmlFor={field.name}>
                {field.label} {field.required && "*"}
              </label>
              {field.type === "select" ? (
                <select
                  id={field.name}
                  name={field.name}
                  required={field.required}
                  className="w-full border border-gray-300 rounded-md p-2"
                  onChange={handleChange}
                  value={formData[field.name]}
                >
                  <option value="">Select...</option>
                  {field.options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : field.type === "textarea" ? (
                <textarea
                  id={field.name}
                  name={field.name}
                  required={field.required}
                  maxLength={field.maxLength}
                  className="w-full border border-gray-300 rounded-md p-2"
                  onChange={handleChange}
                  value={formData[field.name]}
                />
              ) : (
                <input
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  required={field.required}
                  className="w-full border border-gray-300 rounded-md p-2"
                  onChange={handleChange}
                  value={formData[field.name]}
                />
              )}
            </div>
          ))}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
