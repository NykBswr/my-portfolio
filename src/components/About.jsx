import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { Link } from 'react-router-dom';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section className='pt-0 pb-25 mb-20' id='about'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'
          ></motion.div>
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'
          >
            <h2 className='h2 text-accent'>About me.</h2>
            <h3 className='h3 mb-4 text-dark dark:text-white'>I am a dedicated Data Science Technology student</h3>
            <p className='mb-6 text-dark dark:text-white'> at the Faculty of Advanced Technology and Multidiscipline, Airlangga University.
With strong interpersonal skills and a diligent work ethic, I thrive in collaborative environments. I have built a solid foundation of skills
through my university courses and my high school years, which includes proficiency in various computer technologies. I am enthusiastic
about making meaningful contributions to the field of data science</p>
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  <CountUp start={0} end={5} duration={3} /> 
                </div>
                <div className='font-primary text-dark dark:text-white text-sm tracking-[2px]'>Project<br />Completed</div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  <CountUp start={0} end={5} duration={3} /> +
                </div>
                <div className='font-primary text-dark dark:text-white text-sm tracking-[2px]'>Experience<br />in Organisation</div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  <CountUp start={0} end={15} duration={3} /> +
                </div>
                <div className='font-primary text-dark dark:text-white text-sm tracking-[2px]'>Event<br />in Organisation</div>
              </div>
            </div>
            <div className='flex gap-x-8 items-center'>
              <button className='btn btn-lg cursor-pointer'>
                <a 
                href="#contact" 
                activeClass='active'
                smooth={true} 
                spy={true}>
                  Contact me
                </a>
              </button>
              <a href='/' className='text-gradient btn-link'>
                My Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
