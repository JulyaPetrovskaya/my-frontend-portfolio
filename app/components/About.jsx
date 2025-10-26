import React from 'react';
import { assets, infoList, toolsData } from '@/assets/assets';
import Image from 'next/image';
import { motion } from 'motion/react';

const About = ({ isDarkMode }) => {
  return (
    <motion.section
      id='about'
      className='w-full px-[12%] py-10 scroll-mt-20'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        className='text-center text-lg font-Ovo'
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Introduction
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='text-center text-5xl font-Ovo'
      >
        About Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className='flex w-full flex-col justify-center lg:flex-row items-center gap-20 my-10 max-w-6xl mx-auto'
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className='w-64 sm:w-80 rounded-3xl max-w-none'
        >
          <Image
            src={assets.user_image}
            alt='user'
            className='w-full mb-10 rounded-3xl'
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className='flex-1'
        >
          <p className='mb-10 max-w-2xl font-Ovo'>
            A Frontend Developer dedicated to building intuitive and responsive
            web solutions. I focus on turning complex problems into elegant user
            experiences through clean, maintainable code, and I'm looking for an
            opportunity to help a great team build amazing products.
          </p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                whileHover={{ scale: 1.05 }}
                className={`border-[0.5px] rounded-xl p-6 cursor-pointer hover:-translate-y-1 duration-500 hover:shadow-black ${
                  isDarkMode
                    ? 'border-white hover:bg-dark-hover/50 hover:shadow-white'
                    : 'border-gray-400 hover:bg-light-hover'
                }`}
                key={index}
              >
                {icon && (
                  <Image
                    src={isDarkMode ? iconDark : icon}
                    alt={title}
                    className='w-7 mt-3'
                  />
                )}
                <h3
                  className={`my-4 font-semibold ${
                    isDarkMode ? 'text-white' : 'text-gray-700'
                  }`}
                >
                  {title}
                </h3>
                <p
                  className={`${
                    isDarkMode ? 'text-white/80' : 'text-gray-600'
                  } text-sm`}
                >
                  {description}
                </p>
              </motion.li>
            ))}
          </motion.ul>

          <motion.h4
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            className={`my-6 text-gray-700 font-Ovo ${
              isDarkMode ? 'text-white/80' : ''
            }`}
          >
            Tools I use:{' '}
          </motion.h4>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className='flex flex-wrap items-center gap-3 sm:gap-5 max-w-2xl'
          >
            {toolsData.map((tool, index) => (
              <motion.li
                whileHover={{ scale: 1.1 }}
                className={`flex flex-col shrink items-center justify-center w-12 h-12 p-1 sm:w-16 sm:h-16 border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 ${
                  isDarkMode ? 'bg-white/50' : ''
                }`}
                key={index}
                title={tool.name}
              >
                <Image
                  src={tool.icon}
                  alt={tool.name}
                  width={32}
                  height={32}
                  className='w-12'
                />
                {/* <p>{tool.name}</p> */}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default About;
