import React from 'react';
// motion
import { motion } from 'framer-motion'
// variants
import { fadeIn } from '../variants'

const Contact = () => {
  return (
    <section className='py-16 sm:pb-24 lg:section' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text */}
          <motion.div variants={fadeIn('right', 0.3)} initial='hidden' whileInView={'show'} viewport={{ once: false, amout: 0.3 }} className='flex-1 flex justify-start item-center'>
            <div>
              <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>Get in touch</h4>
              <h2 className='text-dark dark:text-white text-[45px] lg:text-[90px] leading-none mb-12'>
                Contact <br /> me!
              </h2>
            </div>
          </motion.div>
          {/* form */}
          <motion.form variants={fadeIn('left', 0.3)} initial='hidden' whileInView={'show'} viewport={{ once: false, amout: 0.3 }} className='flex-1 border border-dark dark:border-white rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'>
            <input className='text-dark dark:text-white bg-transparent border-dark dark:border-white border-b py-3 outline-none w-full placeholder:text-dark dark:placeholder:text-white focus:border-accent transition-all' type='text' placeholder='Name'></input>
            <input className='text-dark dark:text-white bg-transparent border-dark dark:border-white border-b py-3 outline-none w-full placeholder:text-dark dark:placeholder:text-white focus:border-accent transition-all' type='email' placeholder='Email'></input>
            <textarea className='text-dark dark:text-white bg-transparent border-dark dark:border-white border-b py-12 outline-none w-full placeholder:text-dark dark:placeholder:text-white focus:border-accent transition-all resize-none mb-12' placeholder='Message'></textarea>
            <button className='btn btn-lg'>Send Message</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
