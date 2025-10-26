import { assets, serviceData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from 'motion/react';

const Services = ({ isDarkMode }) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id='services'
      className='w-full px-[12%] py-10 scroll-mt-20'
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='text-center text-lg font-Ovo'
      >
        What I offer
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='text-center text-5xl font-Ovo'
      >
        My Services
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'
      >
        I offer expertise in the core JavaScript ecosystem, specializing in
        building scalable, pixel-perfect user interfaces with React, Next.js,
        and Tailwind CSS. My services ensure cross-browser compatibility and
        maintainable code
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className='grid grid-cols-auto-fit-minmax gap-6 my-10 max-w-6xl mx-auto'
      >
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            key={index}
            className={`border border-gray-400 rounded-lg px-8 py-12 cursor-pointer  hover:-translate-y-1 duration-500 ${
              isDarkMode
                ? 'hover:bg-dark-hover hover:shadow-white'
                : 'hover:bg-light-hover hover:shadow-black'
            }`}
          >
            <Image src={icon} alt={title} className='w-10' />
            <h3
              className={`text-lg my-4 ${
                isDarkMode ? 'text-white' : 'text-grey-700'
              }`}
            >
              {title}
            </h3>
            <p
              className={`text-sm leading-5 ${
                isDarkMode ? 'text-white/80' : 'text-grey-600'
              }`}
            >
              {description}
            </p>
            {/* <a href={link} className='flex items-center gap-2 text-sm mt-5'>
              Read more{' '}
              <Image src={assets.right_arrow} alt='' className='w-4' />
            </a> */}
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Services;
