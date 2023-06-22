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
import Img1 from '../assets/Gojek-10.svg'
import Img2 from '../assets/Gojek-2.svg'
import Img3 from '../assets/Gojek-3.svg'
import Img4 from '../assets/Gojek-4.svg'
import Img5 from '../assets/Gojek-5.svg'

const Project_Gojek = () => {
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
                            Prediksi Total Transaksi di Aplikasi Gojek
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
                                        <img className='group-hover:scale-125 transition-all duration-500' src={Img4} alt='' />
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
                                <SwiperSlide>
                                    <div className='group relative overflow-hidden border-2 border-accent/50 dark:border-white/50 rounded-xl mb-5 lg:mb-0'>
                                        {/* overlay */}
                                        <div className='group-hover:bg-black/25 w-full h-full absolute z-40 transition-all duration-300'></div>
                                        {/* img */}
                                        <img className='group-hover:scale-125 transition-all duration-500' src={Img5} alt='' />
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
                            Prediction of Total Transactions in The Gojek Application
                            </h3>
                            <p className='text-dark dark:text-white font-secondary leading-tight mb-5'>
                                For my final project in the Exploratory Data Analysis and Visualization course, I used R Shiny in RStudio to analyze the factors influencing
                                total expenditure on the Gojek app among Indonesian students over a 6-month period. I performed thorough data exploration, outlier
                                detection, distribution examination, and correlation analysis. My findings revealed a strong correlation between total Gojek expenditure
                                and the semester tuition fee (UKT), with the type of residence (boarding house or rental) significantly impacting spending patterns on the
                                Gojek app. By developing a website using R Shiny, my project offers valuable insights into the spending behavior of Indonesian students
                                using the Gojek app, thereby contributing to ongoing efforts to enhance Gojek's services.
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

export default Project_Gojek;
