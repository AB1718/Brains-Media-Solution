import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import Logo from '../assets/Logo.webp';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo Section */}
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <img
              src={Logo}
              alt="Brains Media Solutions Logo"
              className="h-20 mx-auto md:mx-0"
            />
          </div>

          {/* Links Section */}
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/contact-us" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms-of-service" className="hover:underline">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="text-gray-300 mb-4 not-italic">
              Plot No 28, 2nd Floor<br />
              Above Vikhyath Eye & Retina Care Center<br />
              Ganeshpur Road, Near Military Hospital<br />
              Belagavi, Karnataka – 591108
            </address>
            <p className="text-gray-300 mb-4">
              Phone: <a href="tel:+919535533588" className="hover:underline">+91 95355 33588</a>
            </p>
            <p className="text-gray-300">
              Email: <a href="mailto:contact@brainsmediasolutions.com" className="hover:underline">contact@brainsmediasolutions.com</a>
            </p>
          </div>

          {/* Social Media Section */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://facebook.com/brainsmediasolutions"
                className="text-white hover:text-blue-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="text-2xl" />
              </a>
              <a
                href="https://twitter.com/brainsmedia"
                className="text-white hover:text-blue-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="text-2xl" />
              </a>
              <a
                href="https://linkedin.com/company/brains-media-solutions"
                className="text-white hover:text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className="text-2xl" />
              </a>
              <a
                href="https://instagram.com/brainsmediasolutions"
                className="text-white hover:text-pink-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-8">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} Brains Media Solutions. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
