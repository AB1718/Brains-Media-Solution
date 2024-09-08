import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div id='contactus' className="w-full py-16 px-4 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-8">Contact Us</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-yellow-600">Get in Touch</h2>
            <form action="mailto:contact@brainsmediasolutions.com" method="post" encType="text/plain">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-600 text-white py-2 px-4 rounded-md shadow-lg hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-yellow-600">Our Contact Information</h2>
            <div className="mb-4">
              <div className="flex items-center mb-4">
                <FaPhoneAlt className="text-2xl text-yellow-600 mr-3" />
                <span className="text-lg">+91 95355 33588</span>
              </div>
              <div className="flex items-center mb-4">
                <FaEnvelope className="text-2xl text-yellow-600 mr-3" />
                <span className="text-lg">contact@brainsmediasolutions.com</span>
              </div>
              <div className="flex items-center mb-4">
                <FaMapMarkerAlt className="text-2xl text-yellow-600 mr-3" />
                <span className="text-lg">Plot No 28, 2nd Floor Above Vikhyath Eye & Retina Care Center, Ganeshpur Road, Near Military Hospital, Belagavi, Karnataka – 591108</span>
              </div>
            </div>
            {/* Map Embed */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-yellow-600">Our Location</h3>
              <iframe
                title="Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15018.375000000005!2d74.4888316!3d15.8496333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bab2f10e55f5e1f%3A0x71f40ed66577595!2sVikhyath%20Eye%20%26%20Retina%20Care%20Center!5e0!3m2!1sen!2sin!4v1636363038885!5m2!1sen!2sin"
                className="w-full h-64 border-0 rounded-lg shadow-lg"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
