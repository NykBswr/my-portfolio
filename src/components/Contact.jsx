import React, { useRef, useState  } from 'react';
import emailjs from '@emailjs/browser';
// motion
import { motion } from 'framer-motion'
// variants
import { fadeIn } from '../variants'

const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null)

  const handSubmit =e=>{
    e.preventDefault();
    
    emailjs.sendForm('service_f97736n', 'template_7gupj7q', ref.current, 'iF8VdWBEANuKiawX8')
        .then((result) => {
            console.log(result.text);
            setSuccess(true)
        }, (error) => {
            console.log(error.text);
            setSuccess(false)
        });
    };

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
          <motion.form ref={ref} onSubmit={handSubmit} variants={fadeIn('left', 0.3)} initial='hidden' whileInView={'show'} viewport={{ once: false, amout: 0.3 }} className='flex-1 border border-dark dark:border-white rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'>
            <input name="name" className='text-dark dark:text-white bg-transparent border-dark dark:border-white border-b py-3 outline-none w-full placeholder:text-dark dark:placeholder:text-white focus:border-accent transition-all' type='text' placeholder='Name'></input>
            <input name="email" className='text-dark dark:text-white bg-transparent border-dark dark:border-white border-b py-3 outline-none w-full placeholder:text-dark dark:placeholder:text-white focus:border-accent transition-all' type='email' placeholder='Email'></input>
            <textarea name="message" className='text-dark dark:text-white bg-transparent border-dark dark:border-white border-b py-12 outline-none w-full placeholder:text-dark dark:placeholder:text-white focus:border-accent transition-all resize-none mb-12' placeholder='Message'></textarea>
            <button value="Send" type='submit' className='btn btn-lg'>Send Message</button>
            {success && "Your massage has been sent."}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
