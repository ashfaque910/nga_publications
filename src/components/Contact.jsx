import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
    phone: "",
    school_college: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [formErrors, setFormErrors] = useState({
    from_name: "",
    from_email: "",
    phone: "",
    message: "",
  });

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[0-9]{10}$/; // Validate phone number (10 digits)
    return phoneRegex.test(phone);
  };

  const validateForm = () => {
    let errors = {};

    // Name validation
    if (!formData.from_name.trim()) {
      errors.from_name = "Name is required";
    }

    // Email validation
    if (!formData.from_email) {
      errors.from_email = "Email is required";
    } else if (!validateEmail(formData.from_email)) {
      errors.from_email = "Invalid email format";
    }

    // Phone validation
    if (!formData.phone) {
      errors.phone = "Phone number is required";
    } else if (!validatePhone(formData.phone)) {
      errors.phone = "Invalid phone number (10 digits required)";
    }

    // Message validation
    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }

    setFormErrors(errors);

    // Check if the errors object is empty (no errors)
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(false);
    setError(false);

    // Validate the form before submitting
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    const serviceId = "service_nmccawu";
    const templateId = "template_wp5ilae";
    const publicKey = "GgmW3_k4spqph1gOu";

    emailjs
      .send(serviceId, templateId, formData, publicKey)
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setLoading(false);
          setSuccess(true);
          setFormData({
            from_name: "",
            from_email: "",
            message: "",
            phone: "",
            school_college: "",
          });
        },
        (error) => {
          console.error("EmailJS failed...", error);
          setLoading(false);
          setError(true);
        }
      );
  };

  return (
    <section className="bg-[#cccccc94] py-6 sm:py-6 md:py-6 lg:py-6">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#2E6982] mb-4">
            Contact Us
          </h1>
          <p className="text-lg sm:text-base md:text-lg lg:text-xl text-gray-600">
            We would love to hear from you! Please fill out the form below, or reach out to us at one of our offices.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-start bg-white shadow-2xl rounded-lg p-6 sm:p-8 md:p-10 lg:p-12">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:mr-8 bg-[#2E6982] shadow-xl rounded-lg p-6 sm:p-8 md:p-10">
            <form ref={form} onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block text-sm font-bold mb-2 text-white" htmlFor="from_name">
                  Your Name
                </label>
                <input
                  type="text"
                  id="from_name"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border ${formErrors.from_name ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-[#2E6982] text-black`}
                />
                {formErrors.from_name && <p className="text-red-500 text-sm mt-1">{formErrors.from_name}</p>}
              </div>

              <div className="mb-6">
                <label className="block text-sm font-bold mb-2 text-white" htmlFor="from_email">
                  Your Email
                </label>
                <input
                  type="email"
                  id="from_email"
                  name="from_email"
                  value={formData.from_email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border ${formErrors.from_email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-[#2E6982] text-black`}
                />
                {formErrors.from_email && <p className="text-red-500 text-sm mt-1">{formErrors.from_email}</p>}
              </div>

              <div className="mb-6">
                <label className="block text-sm font-bold mb-2 text-white" htmlFor="phone">
                  Your Phone Number
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border ${formErrors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-[#2E6982] text-black`}
                />
                {formErrors.phone && <p className="text-red-500 text-sm mt-1">{formErrors.phone}</p>}
              </div>

              <div className="mb-6">
                <label className="block text-sm font-bold mb-2 text-white" htmlFor="school_college">
                  School or College Name
                </label>
                <input
                  type="text"
                  id="school_college"
                  name="school_college"
                  value={formData.school_college}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2E6982] text-black"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-bold mb-2 text-white" htmlFor="message">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className={`w-full px-4 py-3 border ${formErrors.message ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-[#2E6982] text-black`}
                />
                {formErrors.message && <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>}
              </div>

              <button
                type="submit"
                className="bg-yellow-400 hover:bg-red-400 text-white font-bold py-3 rounded-lg shadow-lg transition duration-300 w-full"
                disabled={loading}
              >
                {loading ? "Sending..." : "Submit"}
              </button>

              {success && <p className="text-green-500 mt-4">Message sent successfully!</p>}
              {error && <p className="text-red-500 mt-4">Failed to send message. Please try again later.</p>}
            </form>
          </div>

          <div className="w-full lg:w-1/2 text-gray-600">
            <h2 className="text-2xl font-bold mb-4 text-[#2E6982]">Contact Information</h2>
            <p className="text-lg sm:text-base md:text-lg lg:text-xl mb-6">
              Feel free to reach us through the following offices and contact details:
            </p>

            <div className="space-y-6">
              <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-[#2E6982]">HEAD OFFICE</h3>
                <p>H No. 597, Govind Puri, New Delhi, Delhi 110019, India</p>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-[#2E6982]">Contact Details</h3>
                <p>Email: ngapublication@gmail.com</p>
                <p>Phone: 9108536678</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
