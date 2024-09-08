import React from 'react';
import { FaLightbulb, FaRocket, FaInfinity } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Vision = () => {
  return (
    <div id='vision' className="w-full py-16 px-4 bg-white relative overflow-hidden text-gray-800">
      {/* Background Gradient Animation */}
      <div className="absolute inset-0 bg-black"></div>

      {/* Wavy Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-0">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-16 md:h-32"
        >
          <path
            d="M0,0V46.29c47.52,22.5,103.36,43.11,167.72,42.86C387.14,88.79,502,0,629.44,0c104.37,0,166.6,54.85,254.87,82.14C1017.39,110.58,1114,85.2,1200,46.29V0Z"
            className="fill-white"
          ></path>
        </svg>
      </div>

      <div className=" w-10/12 ax-w-7xl mx-auto flex flex-col gap-10 text-center relative z-10">
        <h2 className="text-white text-3xl md:text-5xl font-extrabold mb-8 animate__animated animate__fadeIn animate__delay-1s">
          Our Vision
        </h2>
        <p className=" text-gray-400 text-lg md:text-xl mb-12 animate__animated animate__fadeIn animate__delay-2s">
          At Brains Media Solutions, we envision a world where creativity and technology converge to drive innovation. We are dedicated to crafting media solutions that not only meet the needs of today but also anticipate the challenges of tomorrow.
        </p>

        <div className="flex flex-col md:flex-row justify-evenly items-center space-y-8 md:space-y-0 md:space-x-8">
          {/* Vision 1 */}
          <motion.div
            className="bg-white p-4 md:p-6 rounded-lg shadow-lg w-full md:w-1/3 text-gray-800 transition-transform transform hover:scale-105 hover:bg-yellow-500 hover:text-white"
            whileHover={{ scale: 1.05, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex items-center justify-center mb-4">
              <FaLightbulb className="text-5xl md:text-6xl text-yellow-500 transition-colors duration-300 hover:text-white" />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold mb-2">
              Innovation & Creativity
            </h3>
            <p className="text-sm md:text-base">
              We aim to lead the way in creating media solutions that inspire and innovate, pushing the boundaries of what’s possible.
            </p>
          </motion.div>

          {/* Vision 2 */}
          <motion.div
            className="bg-white p-4 md:p-6 rounded-lg shadow-lg w-full md:w-1/3 text-gray-800 transition-transform transform hover:scale-105 hover:bg-yellow-500 hover:text-white"
            whileHover={{ scale: 1.05, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex items-center justify-center mb-4">
              <FaRocket className="text-5xl md:text-6xl text-red-500 transition-colors duration-300 hover:text-white" />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold mb-2">
              Growth & Expansion
            </h3>
            <p className="text-sm md:text-base">
              Our vision is to empower businesses to expand their horizons with solutions that grow alongside their ambitions.
            </p>
          </motion.div>

          {/* Vision 3 */}
          <motion.div
            className="bg-white p-4 md:p-6 rounded-lg shadow-lg w-full md:w-1/3 text-gray-800 transition-transform transform hover:scale-105 hover:bg-yellow-500 hover:text-white"
            whileHover={{ scale: 1.05, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex items-center justify-center mb-4">
              <FaInfinity className="text-5xl md:text-6xl text-green-500 transition-colors duration-300 hover:text-white" />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold mb-2">
              Future-Ready Solutions
            </h3>
            <p className="text-sm md:text-base">
              We are committed to building solutions that are ready for the future, ensuring your business thrives in an ever-evolving digital world.
            </p>
          </motion.div>
        </div>

        {/* Call to Action Button */}
        <div className="mt-12 flex justify-center">
          <a href="#contactus" className="bg-black text-white border border-yellow-500 py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-110 hover:bg-yellow-500 hover:text-black">
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default Vision;
