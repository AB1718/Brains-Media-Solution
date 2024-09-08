import React from 'react';
import Software2Image from '../assets/Software2Image.png';
import Software1 from '../assets/Software1.png';

const Mission = () => {
  return (
    <section id='mission'>
      <div className="w-full bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            Our Mission
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            At Brains Media Solutions, we are committed to pushing the boundaries of innovation and excellence. Our vision is to empower businesses by delivering cutting-edge media solutions that drive growth, inspire engagement, and create a lasting impact.
          </p>

          <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-16">
            {/* Image Section */}
            <div className="mb-8 lg:mb-0">
              <img 
                className="w-full max-w-md lg:max-w-lg" 
                src={Software2Image} 
                alt="Software Image 2"
              />
            </div>

            {/* Text Section */}
            <div className="flex flex-col w-full max-w-md lg:max-w-xl text-left gap-8 justify-center">
              <p className="text-2xl font-bold">
                Build the right team to scale
              </p>
              <p className="text-lg">
                Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers).
              </p>
              <p className="text-lg">
                Our <span className="text-[#57007B]">delivery model</span> helps you cut costs and deliver within budget.
              </p>
              <div>
                <img 
                  className="w-full h-auto" 
                  src={Software1} 
                  alt="Software Image 1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
