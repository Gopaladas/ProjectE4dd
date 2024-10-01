import React, { useState } from "react";
import backgroundVideo from "./vdcontact.mp4";
import image1 from "./image1.jpg";
import image2 from "./image2.jpg";
import image3 from "./image3.jpg"; // New image added
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    preferredDate: "",
    preferredTime: "",
    declaration: false,
  });

  const [fieldFocused, setFieldFocused] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    message: false,
    preferredDate: false,
    preferredTime: false,
  });

  const [selectedImage, setSelectedImage] = useState(null);
  const [showAddress, setShowAddress] = useState(false);

  const handleImageClick = (imageNumber) => {
    if (selectedImage === imageNumber && showAddress) {
      setSelectedImage(null);
      setShowAddress(false);
    } else {
      setSelectedImage(imageNumber);
      setShowAddress(true);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
    setFieldFocused({ ...fieldFocused, [name]: value.trim() !== "" });
  };

  const handleFocus = (name) => {
    setFieldFocused({ ...fieldFocused, [name]: true });
  };

  const handleBlur = (name) => {
    if (formData[name].trim() === "") {
      setFieldFocused({ ...fieldFocused, [name]: false });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const res = await axios.post(
        "http://localhost:5000/api/mail/sendMail",
        formData,
        {
          withCredentials: true,
        }
      );

      console.log(res);
      if (res.data.success) {
        toast.success("Email sent successfully!");
      } else {
        toast.error("Failed to send email. Please try again.");
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to send email. Please try again.");
    }
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
      preferredDate: "",
      preferredTime: "",
      declaration: false,
    });
    setFieldFocused({
      firstName: false,
      lastName: false,
      email: false,
      phone: false,
      message: false,
      preferredDate: false,
      preferredTime: false,
    });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center p-4">
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover"
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <div className="relative flex flex-col md:flex-row items-start justify-center w-full h-full p-8">
        <div className="md:w-1/3 flex flex-col justify-center items-center space-y-4 bg-blue-900 rounded-lg shadow-lg p-4">
          <h2 className="text-2xl md:text-4xl font-semibold text-white mb-4 text-center">
            Contact here for more info
          </h2>
          <img
            src={image1}
            alt="USA branch"
            className="rounded-lg shadow-lg h-auto max-w-full cursor-pointer"
            style={{ maxHeight: "300px" }}
            onClick={() => handleImageClick(1)}
          />
          {showAddress && selectedImage === 1 && (
            <p className="text-white mt-4 text-center whitespace-pre-line bg-blue-600 p-2 rounded-lg">
              <b>USA Branch</b> <br />
              2915 Bluestem Dr
              <br />
              #2193, West Fargo
              <br />
              ND 58078 <br />
              United States of America
              <br />
              Email us: info@e4dd.com
              <br />
            </p>
          )}
          <img
            src={image2}
            alt="Hyderabad branch"
            className="rounded-lg shadow-lg h-auto max-w-full cursor-pointer"
            style={{ maxHeight: "300px" }}
            onClick={() => handleImageClick(2)}
          />
          {showAddress && selectedImage === 2 && (
            <p className="text-white mt-4 text-center whitespace-pre-line bg-purple-600 p-2 rounded-lg">
              <b>Hyderabad Branch</b>
              <br />
              Manjeera Square
              <br />
              #403, Ameerpet
              <br />
              Hyderabad,Telangana, India <br />
              Email us: info@e4dd.com <br />
              Call us: +91-988-500-8080
            </p>
          )}
          <img
            src={image3}
            alt="New branch"
            className="rounded-lg shadow-lg h-auto max-w-full cursor-pointer"
            style={{ maxHeight: "300px" }}
            onClick={() => handleImageClick(3)}
          />
          {showAddress && selectedImage === 3 && (
            <p className="text-white mt-4 text-center whitespace-pre-line bg-green-600 p-2 rounded-lg">
              <b>Oman Global Headquarters</b>
              <br />
              ELITE for Digital Development LLC.
              <br />
              As Seeb / Al Seeb / Muscat Governorate <br />
              PO Box 111 <br />
              Postal Code 112 <br />
              Email us: info@e4dd.com <br />
              Call us: +968-7698-0807
            </p>
          )}
        </div>
        <div className="bg-[#f11550] shadow-lg rounded-lg max-w-2xl w-full p-8 md:ml-12 text-center mt-8 md:mt-0">
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-700 mb-4">
            Let's Grow Together
          </h2>
          <p className="text-lg md:text-xl text-white mb-6">
            Start a conversation with us
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-wrap -mx-2">
              <div className="w-full md:w-1/2 px-2 mb-4">
                <div className="relative">
                  <label
                    htmlFor="firstName"
                    className="block text-m font-medium text-gray-700"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="FirstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    onFocus={() => handleFocus("firstName")}
                    onBlur={() => handleBlur("firstName")}
                    className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none ${
                      fieldFocused.firstName || formData.firstName
                        ? "border-blue-600 ring ring-blue-600 ring-opacity-50 bg-blue-100 text-blue-900"
                        : "border-gray-300"
                    }`}
                    required
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 px-2 mb-4">
                <div className="relative">
                  <label
                    htmlFor="lastName"
                    className="block text-m font-medium text-gray-700"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="LastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    onFocus={() => handleFocus("lastName")}
                    onBlur={() => handleBlur("lastName")}
                    className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none ${
                      fieldFocused.lastName || formData.lastName
                        ? "border-pink-600 ring ring-pink-600 ring-opacity-50 bg-pink-100 text-pink-900"
                        : "border-gray-300"
                    }`}
                    required
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 px-2 mb-4">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="block text-m font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => handleFocus("email")}
                    onBlur={() => handleBlur("email")}
                    className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none ${
                      fieldFocused.email || formData.email
                        ? "border-purple-600 ring ring-purple-600 ring-opacity-50 bg-purple-100 text-purple-900"
                        : "border-gray-300"
                    }`}
                    required
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 px-2 mb-4">
                <div className="relative">
                  <label
                    htmlFor="phone"
                    className="block text-m font-medium text-gray-700"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => handleFocus("phone")}
                    onBlur={() => handleBlur("phone")}
                    className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none ${
                      fieldFocused.phone || formData.phone
                        ? "border-green-600 ring ring-green-600 ring-opacity-50 bg-green-100 text-green-900"
                        : "border-gray-300"
                    }`}
                    required
                  />
                </div>
              </div>
              <div className="w-full px-2 mb-4">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="block text-m font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => handleFocus("message")}
                    onBlur={() => handleBlur("message")}
                    className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none ${
                      fieldFocused.message || formData.message
                        ? "border-red-600 ring ring-red-600 ring-opacity-50 bg-red-100 text-red-900"
                        : "border-gray-300"
                    }`}
                    rows="4"
                    required
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 px-2 mb-4">
                <div className="relative">
                  <label
                    htmlFor="preferredDate"
                    className="block text-m font-medium text-gray-700"
                  >
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    onFocus={() => handleFocus("preferredDate")}
                    onBlur={() => handleBlur("preferredDate")}
                    className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none ${
                      fieldFocused.preferredDate || formData.preferredDate
                        ? "border-yellow-600 ring ring-yellow-600 ring-opacity-50 bg-yellow-100 text-yellow-900"
                        : "border-gray-300"
                    }`}
                    required
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 px-2 mb-4">
                <div className="relative">
                  <label
                    htmlFor="preferredTime"
                    className="block text-m font-medium text-gray-700"
                  >
                    Preferred Time
                  </label>
                  <input
                    type="time"
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    onFocus={() => handleFocus("preferredTime")}
                    onBlur={() => handleBlur("preferredTime")}
                    className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none ${
                      fieldFocused.preferredTime || formData.preferredTime
                        ? "border-indigo-600 ring ring-indigo-600 ring-opacity-50 bg-indigo-100 text-indigo-900"
                        : "border-gray-300"
                    }`}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="relative mb-4">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="declaration"
                  checked={formData.declaration}
                  onChange={handleChange}
                  className="form-checkbox text-pink-600"
                  required
                />
                <span className="ml-2 text-gray-700">
                  I agree to the{" "}
                  <a href="agree" className="text-blue-600">
                    terms and conditions
                  </a>
                </span>
              </label>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Contact;
