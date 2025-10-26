import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { useState } from 'react';
import { motion } from 'motion/react';

const Contact = ({ isDarkMode }) => {
  const [result, setResult] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    // визначаємо 'form', щоб вона була доступна
    const form = event.target;

    const formData = new FormData(event.target);
    formData.append('access_key', 'fee82a86-0d2f-4732-bbe3-e223b028c4ac');

    setResult('Sending...');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult('Form Submitted Successfully!');
        form.reset(); // очистка форми
      } else {
        // Это сработает, если Web3Forms вернул JSON с ошибкой
        setResult('Error: ' + (data.message || 'Something went wrong.'));
      }
    } catch (error) {
      setResult('Network Error. Please try again later.');
    }

    // Сброс пвідомлення через - 5 секунд
    setTimeout(() => {
      setResult('');
    }, 5000);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id='contact'
      className={`w-full px-[12%] py-10 scroll-mt-20 ${
        isDarkMode
          ? 'bg-none'
          : 'bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-size[90%_auto]'
      }`}
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='text-center text-lg font-Ovo'
      >
        Connect with me
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='text-center text-5xl font-Ovo'
      >
        Get in touch
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'
      >
        Ready to build something great together? If you have a potential
        opportunity, project, or full-time position you’d like to discuss,
        please reach out using the form below.
      </motion.p>

      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        onSubmit={onSubmit}
        className='max-w-2xl mx-auto'
      >
        <div className='grid grid-cols-auto-fit-minmax gap-6 mt-10 mb-8'>
          <motion.input
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            type='text'
            placeholder='Enter your name'
            required
            className={`flex-1 p-3 outline-none border-[0.5px] rounded-md ${inputThemeClasses}`}
            name='name'
          />
          <motion.input
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            type='email'
            placeholder='Enter your email'
            required
            className={`flex-1 p-3 outline-none border-[0.5px] rounded-md ${inputThemeClasses}`}
            name='email'
          />
        </div>
        <motion.textarea
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          rows='6'
          placeholder='Enter your message'
          required
          className={`w-full p-4 outline-none border-[0.5px] rounded-md mb-6 ${
            isDarkMode
              ? 'bg-dark-hover/30 border-white/90'
              : 'bg-white border-gray-400'
          }`}
          name='message'
        ></motion.textarea>

        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          type='submit'
          className={`py-3 px-8 w-max mt-6 flex items-center justify-between gap-2 rounded-full mx-auto duration-500 ${
            isDarkMode
              ? 'bg-transparent border-[0.5px] hover:bg-dark-hover'
              : 'hover:bg-black bg-black/80 text-white'
          }`}
        >
          Submit now{' '}
          <Image src={assets.right_arrow_white} alt='' className='w-4' />
        </motion.button>

        <p className='mt-4'>{result}</p>
      </motion.form>
    </motion.section>
  );
};

export default Contact;
