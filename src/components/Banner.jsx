import React from 'react';
import Image from '../assets/avatar.svg';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp, FaGoogle } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Banner = () => {
  return (
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center pb-0' id='home'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1 variants={fadeIn('up', 0.3)} initial='hidden' whileInView={'show'} viewport={{ once: false, amout: 0.7 }} className='text-dark dark:text-white text-[45px] font-bold leading-[0.8] lg:text-[100px]'>
              NAYAKA <span> BASWARA </span>
            </motion.h1>
            <motion.div variants={fadeIn('up', 0.3)} initial='hidden' whileInView={'show'} viewport={{ once: false, amout: 0.7 }} className='mb-6 text-[28px] lg:text-[50px] font-secondary font-semibold uppercase leading-[1]'>
              <TypeAnimation 
                sequence={[
                  'Data Science Technology Student',
                  1000,
                  'at Airlangga University',
                  1000,
                ]}
                speed={50}
                className='text-accent'
                wrapper='span'
                repeat={Infinity}
              />
            </motion.div>
            <motion.p variants={fadeIn('up', 0.2)} initial='hidden' whileInView={'show'} viewport={{ once: false, amout: 0.7 }} className='text-dark dark:text-white mb-8 text-[15px] lg:text-[30px] max-w-lg mx-auto lg:mx-0'>
              Eager to make impactful contributions in the field of data science, I possess proficiency in diverse computer technologies.
            </motion.p>
            <motion.div variants={fadeIn('up', 0.7)} initial='hidden' whileInView={'show'} viewport={{ once: false, amout: 0.8 }} className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <button className='btn btn-lg'>
                <a href="#contact" 
                activeClass='active'
                smooth={true} 
                spy={true}>
                  Contact me
                </a>
              </button>
              <a href='/' className='text-gradient btn-link'>
                My Portfolio
              </a>
            </motion.div>
            <motion.div variants={fadeIn('up', 0.8)} initial='hidden' whileInView={'show'} viewport={{ once: false, amout: 0.7 }} className='cursor-pointer text-dark dark:text-white flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
              <a href='https://www.linkedin.com/in/nayaka-baswara-711057218/' target="_blank">
                <FaLinkedin/>
              </a>
              <a href='https://github.com/NykBswr' target="_blank">
                <FaGithub/>
              </a>
              <a href='https://www.instagram.com/nayaka_baswara/' target="_blank">
                <FaInstagram/>
              </a>
              <a href='https://api.whatsapp.com/send?phone=6287899608728&text=Halo%20,%20saya%20melihat%20dari%20melihat%C2%A0portfolio%C2%A0mu' target="_blank">
                <FaWhatsapp/>
              </a>
              <a href='mailto:baswaranayaka@gmail.com' target="_blank">
                <FaGoogle/>
              </a>
            </motion.div>
          </div>
          {/* <motion.div variants={fadeIn('down', 0.3)} initial='hidden' whileInView={'show'} className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] mx-auto'>
            <img src={Image} alt='' />
          </motion.div> */}
        </div>
      </div>
    </section>
  );
};

export default Banner;
