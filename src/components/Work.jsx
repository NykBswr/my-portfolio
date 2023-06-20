import React from 'react';
// motion
import { motion } from 'framer-motion'
// variants
import { fadeIn } from '../variants'
// img
import Img1 from '../assets/StrokePred-1.png'
import Img2 from '../assets/sunrice-1.png'
import Img3 from '../assets/suratftmm-4.png'

const Work = () => {
  return (
    <section className='section' id='work'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <motion.div variants={fadeIn('right', 0.3)} initial='hidden' whileInView={'show'} viewport={{ once: false, amout: 0.3 }} className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
            {/* text */}
            <div>
              <h2 className='h2 leading-tight text-accent'>
                My latest <br />
                Project
              </h2>
              <p className='text-dark dark:text-white max-w-sm mb-16'>
                This project has been my undertaking throughout my entire academic journey at the university.
              </p>
              <button className='btn btn-sm'>View all projects</button>
            </div>
            {/* images */}
            <div className='group relative overflow-hidden border-2 border-accent/50 dark:border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/25 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt='' />
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Front-End</span>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Stroke Prediction & Care</span>
              </div>
            </div>
          </motion.div>
          <motion.div variants={fadeIn('left', 0.2)} initial='hidden' whileInView={'show'} viewport={{ once: false, amout: 0.3 }} className='flex-1 flex flex-col gap-y-10'>
            {/* images */}
            <div className='group relative overflow-hidden border-2 border-accent/50 dark:border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/25 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img className='group-hover:scale-125 transition-all duration-500' src={Img2} alt='' />
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Front-End</span>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Sunrise Jeep Tour</span>
              </div>
            </div>
            <div className='group relative overflow-hidden border-2 border-accent/50 dark:border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/25 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img className='group-hover:scale-125 transition-all duration-500' src={Img3} alt='' />
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Full Stack Developer</span>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Surat Menyurat FTMM</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
