import { workData } from '@/assets/assets';
import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'motion/react';

const Work = ({ isDarkMode }) => {
  const [showAll, setShowAll] = useState(false);

  //4 елемента бачимо за замовчуванням
  const itemsToShow = showAll ? workData.length : 4;
  const displayedWork = workData.slice(0, itemsToShow);

  // чи потрібна нам кнопка "Show more"
  const hasMore = workData.length > 4 && !showAll;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id='work'
      className='w-full px-[12%] py-10 scroll-mt-20'
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='text-center text-lg font-Ovo'
      >
        My portfolio
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='text-center text-5xl font-Ovo'
      >
        My latest work
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'
      >
        Welcome to my web development portfolio! Explore a collection of my
        projects showcasing my expertise in frontend development.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className='grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] my-10 gap-5 max-w-6xl mx-auto'
      >
        {displayedWork.map((project, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            key={index}
            className={`group animate-fadeIn transition duration-500 ${
              index >= 4 ? 'delay-100' : ''
            }`}
          >
            <Link
              href={project.url}
              target='_blank'
              rel='noopener noreferrer'
              title={project.description}
              className='aspect-square bg-norepeat bg-cover bg-center rounded-lg relative cursor-pointer block'
              style={{ backgroundImage: `url(${project.bgImage})` }}
            >
              <div className='bg-light-hover w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7 z-10'>
                <div>
                  <h2
                    className={`font-semibold ${
                      isDarkMode ? 'text-black' : ''
                    }`}
                  >
                    {project.name}
                  </h2>
                  <p className='text-sm text-gray-700'>{project.title}</p>
                </div>
                <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                  <Image
                    src={assets.send_icon}
                    alt='send icon'
                    className='w-5'
                  />
                </div>
              </div>
            </Link>

            <Link
              href={project.github}
              target='_blank'
              rel='noopener noreferrer'
              title={project.description}
              className={`flex items-center justify-center w-full mt-8 gap-3 px-8 py-2 border border-gray-500 rounded-full font-Ovo ${
                isDarkMode ? 'hover:bg-dark-hover' : 'hover:bg-gray-100'
              } transition-colors`}
            >
              Github code
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {hasMore ? (
        <motion.a
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          onClick={() => setShowAll(true)}
          className='max-w-6xl mx-auto w-max flex items-center justify-center gap-2 cursor-pointer transition hover:scale-105 duration-300'
        >
          Show more{' '}
          <Image
            src={assets.right_arrow_bold}
            alt='Right arrow'
            className='w-4'
          />
        </motion.a>
      ) : (
        // "Show less" з'являється якщо всі елементи бачимо
        workData.length > 4 &&
        showAll && (
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            onClick={() => setShowAll(false)}
            className='max-w-6xl mx-auto w-max flex items-center justify-center gap-2  mt-10 cursor-pointer transition hover:scale-105 duration-300'
          >
            Show less{' '}
            <Image
              src={assets.right_arrow_bold}
              alt='Right arrow'
              className='w-4 transform rotate-180' // повертаємо стрілку
            />
          </motion.a>
        )
      )}
    </motion.section>
  );
};

export default Work;
