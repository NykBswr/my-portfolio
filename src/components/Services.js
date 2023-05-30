import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const services = [
  {
    name: 'Surat Menyurat FTMM',
    description: "Our team is creating a user-friendly letter-writing website for Airlangga University Advanced Technology and Multidiscipline Faculty. Using Laravel, we aim to streamline the process of creating, revising, and sending letters with an intuitive interface for users of varying technical backgrounds. Our expertise will deliver a high-quality website tailored to the faculty community's specific needs.",
    link: 'Learn more',
  },
  {
    name: 'Sunrise Jeep Tour',
    description: "We developed a React.js website for Sunrise Jeep Tour, a family-owned business offering guided Jeep tours through Mount Batur in Bali. Our user-friendly website provides comprehensive tour information, highlighting the adventure's essence and inspiring eco-conscious exploration of Bali's natural wonders.",
    link: 'Learn more',
  },
  {
    name: 'Stroke Prediction and Care',
    description: "Our final project, a stroke prediction API accessible via our website, achieves 81% accuracy using a trained model. Medical professionals can input patient data to aid in early detection and decision-making, improving patient care. The system seamlessly integrates the model as a pickle file for prompt and appropriate medical attention.",
    link: 'Learn more',
  },
  {
    name: 'Analisis Kebahagiaan Negara di Dunia',
    description: "Using Python and SPSS, we conducted nonparametric analysis on the 2019 World Happiness Report, demonstrating my proficiency in statistical analysis.",
    link: 'Learn more',
  },
  {
    name: 'Analisis Kebahagiaan Negara di Dunia',
    description: "Using R Shiny, we analyzed factors influencing Gojek app expenditure among Indonesian students. Our findings reveal strong correlations with UKT and residence types, offering valuable insights for enhancing services.",
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
