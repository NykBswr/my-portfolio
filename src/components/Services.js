import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const services = [
  {
    name: 'Surat Menyurat FTMM',
    description: 'Lorem',
    link: 'Learn more',
  },
  {
    name: 'Sunrise Jeep Tour',
    description: 'Lorem',
    link: 'Learn more',
  },
  {
    name: 'Stroke Prediction and Care',
    description: 'Lorem',
    link: 'Learn more',
  },
  {
    name: 'Analisis Kebahagiaan Negara di Dunia',
    description: 'Lorem',
    link: 'Learn more',
  },
];

const Services = () => {
  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          <motion.div variants={fadeIn('right', 0.3)} initial='hidden' whileInView={'show'} viewport={{ once: false, amout: 0.3 }} className='flex-1 lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
            <h2 className='h2 text-accent mb-6'>What I Do.</h2>
            <h3 className='text-dark dark:text-white h3 max-w-[455px] mb-16'>
              Engaging in multiple projects, I specialize in web development, machine learning, and data analysis as a dedicated data science technology student.
            </h3>
            <button className='btn btn-sm'>See my projects</button>
          </motion.div>
          <motion.div variants={fadeIn('left', 0.5)} initial='hidden' whileInView={'show'} viewport={{ once: false, amout: 0.3 }} className='flex-1'>
            <div>
              {services.map((service, index) => {
                const { name, description, link } = service;
                return (
                  <div className='border-b border-white/20 h-[147px] mb-[38px] flex' key={index}>
                    <div className='max-w-[476px]'>
                      <h4 className='text-dark dark:text-white text-[20px] tracking-wider font-primary font-semibold mb-6'>
                        {name}
                      </h4>
                      <p className='text-dark dark:text-white font-secondary leading-tight'>
                        {description}
                      </p>
                    </div>
                    <div className='flex flex-col flex-1 items-end'>
                      <a href='#' className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                        <BsArrowUpRight />
                      </a>
                      <a href='#' className='text-gradient text-sm'>{link}</a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
