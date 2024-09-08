import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Website Design',
    description: 'Our expert team crafts visually appealing and user-friendly websites tailored to your brand’s identity.',
    features: ['Responsive design', 'Custom graphics and animations', 'Seamless navigation'],
    imageUrl: 'https://t3.ftcdn.net/jpg/03/54/17/86/360_F_354178616_uSdqA6i1A1vkkskFPKOoxQOED0ZMIcn3.jpg',
  },
  {
    title: 'Content Marketing',
    description: 'Engage your audience with compelling content that drives traffic and enhances brand visibility.',
    features: ['Strategic content planning', 'SEO-optimized articles and blogs', 'Social media integration'],
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuj3QpuIZBfbRueZ8DyBZ4xTqVcbQbsVs1yA&s',
  },
  {
    title: 'Search Engine Optimization (SEO)',
    description: 'Improve your website’s search engine rankings and attract organic traffic.',
    features: ['Keyword research and analysis', 'On-page and off-page SEO', 'Performance tracking and reporting'],
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9kCPdq8wQ0rAL1fK2ZLi1em826SkPFCXI8g&s',
  },
  {
    title: 'Digital Advertising',
    description: 'Reach your target audience through effective digital advertising campaigns.',
    features: ['PPC (Pay-Per-Click) management', 'Social media advertising', 'Display advertising strategies'],
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_lHfHdQnagOdIoEBi-S-m7PCnEEDF_oSIkQ&s',
  }
];

const Services = () => {
  return (
    <div id='services' className="container mx-auto px-4 py-8 my-10">
      <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img src={service.imageUrl} alt={service.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{service.title}</h2>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="list-disc list-inside mb-4">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-gray-700">{feature}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Services;
