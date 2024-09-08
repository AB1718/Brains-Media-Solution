import React from 'react';
import Slider from '../components/Slider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faLightbulb, faHandshake } from '@fortawesome/free-solid-svg-icons'; // Import specific icons

const AboutUs = () => {
  return (
    <section id="about" className="bg-black py-16 px-4 md:px-8 lg:px-16 ">
      <div className="max-w-7xl w-11/12 mx-auto flex flex-col lg:flex-row ">
        
        {/* Text Content */}
        <div className="lg:w-[600px] lg:pr-8 flex flex-col gap-7">
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-yellow-500">
            Welcome to <br/><span className="text-white text-6xl">Brains Media Solutions</span>
          </h2>
          <p className="w-full lg:w-[500px] mt-4 text-lg text-gray-300 flex items-center">
            <FontAwesomeIcon icon={faRocket} className="text-yellow-500 mr-3" /> 
            At Brains Media Solutions, we harness the power of creativity and technology to deliver innovative media solutions that drive engagement and growth.
          </p>
          <p className="w-full lg:w-[500px] mt-2 text-lg text-gray-300 flex items-center">
            <FontAwesomeIcon icon={faLightbulb} className="text-yellow-500 mr-3" /> 
            Partner with us to transform your digital presence and achieve your business goals.
          </p>
          <div className=" hidden md:block flex-shrink-0 mt-6">
            <a href="#contactus" className="bg-black text-white border border-yellow-500 py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-110 hover:bg-yellow-500 hover:text-black flex items-center w-[150px]">
              <FontAwesomeIcon icon={faHandshake} className="mr-2" />
              Learn More
            </a>
          </div>
        </div>

        {/* Image Content */}
        <div className="lg:w-[600px] mt-8 lg:mt-0">
          <Slider />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
