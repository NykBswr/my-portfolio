import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { Nav_Project } from '../components'
import { ThemeProvider } from '../dist/ThemeContext';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import "swiper/less/pagination";

// import required modules
import { Pagination, Keyboard, Scrollbar} from "swiper";

// img
import Img1 from '../assets/sunrice-1.png'
import Img2 from '../assets/sunrice-2.png'
import Img3 from '../assets/sunrice-3.png'

const Project_SunriseTour = () => {
    return (
        <>
        <ThemeProvider>
        <div className='bg-site-1 dark:bg-site bg-no-repeat bg-cover overflow-hidden'>
            <Nav_Project />
            <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center pb-0 section' id='Images'>
                <div className='container mx-auto'>
                    <div className='lg:items-center'>
                        <div className='flex-1 font-secondary mb-10'>
                            <motion.h1 variants={fadeIn('down', 0.1)} initial='hidden' whileInView={'show'} viewport={{ once: false, amout: 0.3 }} className='text-center text-dark dark:text-white text-[25px] font-bold lg:text-[40px] mb-10'>
                            Sunrice Jeep Tour
                            </motion.h1>
                            <Swiper
                                style={{
                                '--swiper-pagination-color': '#fff',
                                }}
                                slidesPerView={1}
                                spaceBetween={50}
                                loop={true}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}        
                                pagination={{
                                clickable: true,
                                }}
                                keyboard={{
                                enabled: true,
                                }}
                                modules={[Pagination, Scrollbar, Keyboard]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <div className='group relative overflow-hidden border-2 border-accent/50 dark:border-white/50 rounded-xl mb-5 lg:mb-0'>
                                        {/* overlay */}
                                        <div className='group-hover:bg-black/25 w-full h-full absolute z-40 transition-all duration-300'></div>
                                        {/* img */}
                                        <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt='' />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='group relative overflow-hidden border-2 border-accent/50 dark:border-white/50 rounded-xl mb-5 lg:mb-0'>
                                        {/* overlay */}
                                        <div className='group-hover:bg-black/25 w-full h-full absolute z-40 transition-all duration-300'></div>
                                        {/* img */}
                                        <img className='group-hover:scale-125 transition-all duration-500' src={Img2} alt='' />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='group relative overflow-hidden border-2 border-accent/50 dark:border-white/50 rounded-xl mb-5 lg:mb-0'>
                                        {/* overlay */}
                                        <div className='group-hover:bg-black/25 w-full h-full absolute z-40 transition-all duration-300'></div>
                                        {/* img */}
                                        <img className='group-hover:scale-125 transition-all duration-500' src={Img3} alt='' />
                                    </div>
                                </SwiperSlide>
                        </Swiper>
                        </div>
                    </div>
                </div>
            </section>
            <section id='AboutWeb'>
                <div className='container mx-auto my-auto pt-52 pb-20'>
                    <div className='flex flex-col lg:flex-row'>
                    <motion.div variants={fadeIn('right', 0.3)} initial='hidden' whileInView={'show'} viewport={{ once: false, amout: 0.3 }} className='flex-1 lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
                        <h2 className='h2 text-accent mb-6'>About the Website.</h2>
                        {/* <div className='border-b border-dark/20 dark:border-white/20'>
                            
                        </div> */}
                            <h3 className='text-dark dark:text-white h3 mb-5'>
                                Sunrice Jeep Tour
                            </h3>
                            <p className='text-dark dark:text-white font-secondary leading-tight mb-5'>
                                In collaboration with my friends, we have developed a user-friendly React.js website for Sunrise Jeep Tour. This family-owned business
                                offers guided Jeep tours through the scenic Mount Batur in Bali. Our website provides comprehensive information about the tours,
                                including routes and scenic spots, capturing the essence of the Sunrise Jeep Tour adventure. Through the website, we aim to inspire
                                visitors to virtually explore Mount Batur and embark on an eco-conscious exploration of Bali's natural wonders. With professionalism and
                                expertise, our website serves as a platform for individuals seeking an exciting and sustainable travel experience with Sunrise Jeep Tour.
                            </p>
                    </motion.div>
                    </div>
                </div>
            </section>
        </div>
        </ThemeProvider>
        </>
    );
};

export default Project_SunriseTour;
