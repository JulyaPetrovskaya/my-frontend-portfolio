import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';

const Footer = ({ isDarkMode }) => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='' className='w-36 mx-auto mb-2' />

        <div className='w-max flex items-center gap-2 mx-auto'>
          <Image src={assets.mail_icon} alt='' className='w-6' />
          petrovska.julya@gmail.com
        </div>
      </div>

      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>© 2025 Julya Petrovska. All rights reserved.</p>

        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
          <li>
            <a
              target='_blank'
              href='https://github.com/JulyaPetrovskaya'
              className='flex gap-1'>
              <Image src={isDarkMode ? assets.github_dark : assets.github} alt='' className='w-6' />
              GitHub
            </a>
          </li>

          <li>
            <a
              target='_blank'
              href='https://t.me/julya_petrovska'
              className='flex gap-1'>
              <Image src={assets.telegram} alt='' className='w-6' />
              Telegram
            </a>
          </li>

          <li>
            <a
              target='_blank'
              href='https://www.linkedin.com/in/julya-petrovska-fd/'
              className='flex gap-1'
            >
              <Image src={assets.linkedIn} alt='' className='w-6' />
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
