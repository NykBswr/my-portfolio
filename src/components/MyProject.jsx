import React from 'react';
import { BsArrowDown } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
// img
import Img1 from '../assets/penilaiankurikulum-1.svg'
import Img2 from '../assets/suratftmm-4.png'
import Img3 from '../assets/sunrice-1.png'
import Img4 from '../assets/StrokePred-1.png'
import Img5 from '../assets/Gojek-1.svg'
import { Link } from 'react-router-dom';

const project = [
    {
        name: 'Klasifikasi Profil Risiko Investasi Mahasiswa Berdasarkan Tujuan dan Toleransi Risiko',
        description: "In my final project, I classified the investment risk profiles of university students based on their investment goals and risk tolerance. From the analysis, I found that most respondents in the conservative/moderate class were male, had long-term investment goals, possessed good financial knowledge, and had a medium level of financial capability. I used chi-squared and correlation analysis to determine the top 5 variables that impact investment risk profiles: 'Investment Tenure', 'Research Frequency', 'Investment Experience', 'Gender', and 'Investment Fund'. I also included 'Investment Fund' as it was the only numeric variable in the dataset. To choose the best model, I evaluated the Recall and CV Score metrics due to target variable imbalance. As a result, I found that the Random Forest model with Recall and CV Score of 0.93 and 0.82 respectively was the best model.",
        link: '/pdfs/KLASIFIKASI PROFIL RISIKO INVESTASI MAHASISWA BERDASARKAN TUJUAN DAN TOLERANSI RISIKO.pdf',
        learn: 'Learn more',
    },
    {
        name: 'Analisis Kebahagiaan Negara di Dunia',
        description: "In my final project for Nonparametric Statistics course, I utilized the 2019 World Happiness Report as secondary data obtained from the Sustainable Development Solutions Network, encompassing 156 countries. Employing Python and SPSS, I applied the course concepts to conduct comprehensive statistical analysis. This included performing descriptive statistics and various hypothesis tests such as normality testing, Kruskal-Wallis, Mann-Whitney U, and Jonckheere-Terpstra tests. Furthermore, I explored associations using extended nonparametric tests and determined appropriate methodologies for analyzing data beyond medians. This project served as a compelling demonstration of my proficiency in applying nonparametric statistical techniques to real-world datasets, effectively highlighting my understanding of their significance in statistical analysis.",
        link: '/project',
        learn: 'Learn more',
    },
    {
        name: 'Analisis Regresi Linear Berganda Terkait dengan Pengaruh Gaya Belajar, Persiapan, Lama Belajar, Nilai Tugas, dan Nilai Kuis Terhadap Nilai UTS pada Mata Kuliah Pengantar Statistika Mahasiswa',
        description: "The final project analyzes the relationship between learning experience and competencies before mid-term exam on Introduction to Statistics among Data Science Technology students. The study investigates the influence of learning style, preparation, learning time, task grades, and quiz grades on UTS grades. The project uses regression analysis to determine the relationship between the variables. The conclusions show that there are only four independent variables that significantly influence UTS grades: learning style, preparation, task grades, and quiz grades. The study is limited to the 2021 cohort of Data Science Technology students at Airlangga University. The regression model is reliable and valid with an explained variance of 76.14%.",
        link: '/pdfs/ANALISIS REGRESI LINIER BERGANDA.pdf',
        learn: 'Learn more',
    },
    {
        name: 'Statistical Analysis of Poverty in Indonesia During 2015-2018 for Finding Solution in Suistainable Development Goals Using Python Programming Language',
        description: "For my final project, I utilized Python and Excel to analyze the poverty rate in Indonesia from 2015-2018. Through data visualization using pie charts and histograms, I found that the poverty rate decreased each year. The average interval estimation between 2015 and 2018 did not show significant differences, while the variance interval estimation showed a significant difference. Using hypothesis testing, I concluded that there was no significant decrease in poverty rate when comparing 2015 and 2018 using proportion interval. Lastly, from the two-sample hypothesis testing, I failed to reject the null hypothesis on poverty rate being over 11.2631% with 95% confidence level.",
        link: '/pdfs/STATISTICAL ANALYSIS OF POVERTY IN INDONESIA DURING 2015-2018 FOR FINDING SOLUTION IN SUISTAINABLE DEVELOPMENT GOALS USING PYTHON PROGRAMMING LANGUAGE.pdf',
        learn: 'Learn more',
    },
];

const MyProject = () => {
    return (
        <>
        <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center pb-0' id='Website'>
            <div className='container mx-auto'>
                <div className='flex flex-col lg:flex-row lg:items-center'>
                    <div className='flex-1 font-secondary mb-10'>
                        <motion.h1 variants={fadeIn('down', 0.1)} initial='hidden' whileInView={'show'} viewport={{ once: false, amout: 0.3 }} className='text-center text-dark dark:text-white text-[30px] font-bold lg:text-[40px] mb-10'>
                        My <span> Project </span>
                        </motion.h1>
                        {/* Website Based */}
                        <motion.div variants={fadeIn('right', 0.2)} initial='hidden' whileInView={'show'} viewport={{ once: false, amout: 0.3 }}><h2 className='h2 text-center text-accent justify-start'>Website Based.</h2></motion.div>
                        {/* Row 1 */}
                        <motion.div variants={fadeIn('left', 0.2)} initial='hidden' whileInView={'show'} viewport={{ once: false, amout: 0.3 }} className='flex-1 flex flex-col lg:flex-row gap-x-5 gap-y-5'>  
                            <Link to='/project-penilaian_kurikulum_ftmm' className='group relative overflow-hidden border-2 border-accent/50 dark:border-white/50 rounded-xl mb-5 lg:mb-0'>
                                {/* overlay */}
                                <div className='group-hover:bg-black/25 w-full h-full absolute z-40 transition-all duration-300'></div>
                                {/* img */}
                                <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt='' />
                                {/* pretitle */}
                                <div className='absolute -bottom-full left-5 group-hover:bottom-14 transition-all duration-500 z-50'>
                                    <span className='text-gradient text-sm'>Back-End</span>
                                </div>
                                {/* title */}
                                <div className='absolute -bottom-full left-5 group-hover:bottom-5 transition-all duration-700 z-50'>
                                    <span className='text-2xl text-white'>Penilaian Kurikulum FTMM</span>
                                </div>
                            </Link>
                            <Link to='/project-surat_menyurat_ftmm' className='group relative overflow-hidden border-2 border-accent/50 dark:border-white/50 rounded-xl mb-5 lg:mb-0'>
                                {/* overlay */}
                                <div className='group-hover:bg-black/25 w-full h-full absolute z-40 transition-all duration-300'></div>
                                {/* img */}
                                <img className='group-hover:scale-125 transition-all duration-500' src={Img2} alt='' />
                                {/* pretitle */}
                                <div className='absolute -bottom-full left-5 group-hover:bottom-14 transition-all duration-500 z-50'>
                                    <span className='text-gradient text-sm'>Full Stack</span>
                                </div>
                                {/* title */}
                                <div className='absolute -bottom-full left-5 group-hover:bottom-5 transition-all duration-700 z-50'>
                                    <span className='text-2xl text-white'>Surat Menyurat FTMM</span>
                                </div>
                            </Link>
                            <Link to='/project-sunrise_jeep_tour' className='group relative overflow-hidden border-2 border-accent/50 dark:border-white/50 rounded-xl mb-5 lg:mb-0'>
                                {/* overlay */}
                                <div className='group-hover:bg-black/25 w-full h-full absolute z-40 transition-all duration-300'></div>
                                {/* img */}
                                <img className='group-hover:scale-125 transition-all duration-500' src={Img3} alt='' />
                                {/* pretitle */}
                                <div className='absolute -bottom-full left-5 group-hover:bottom-14 transition-all duration-500 z-50'>
                                    <span className='text-gradient text-sm'>Front-End</span>
                                </div>
                                {/* title */}
                                <div className='absolute -bottom-full left-5 group-hover:bottom-5 transition-all duration-700 z-50'>
                                    <span className='text-2xl text-white'>Sunrise Jeep Tour</span>
                                </div>
                            </Link>
                        </motion.div>

                        {/* Row 2 */}
                        <motion.div variants={fadeIn('up', 0.2)} initial='hidden' whileInView={'show'} viewport={{ once: false, amout: 0.3 }} className='flex-1 flex flex-col lg:flex-row gap-x-5 gap-y-5 mb-5 lg:mb-0'>
                            <Link to='/project-stroke_prediction' className='group relative overflow-hidden border-2 border-accent/50 dark:border-white/50 rounded-xl mt-5 lg:mb-5'>
                                {/* overlay */}
                                <div className='group-hover:bg-black/25 w-full h-full absolute z-40 transition-all duration-300'></div>
                                {/* img */}
                                <img className='group-hover:scale-125 transition-all duration-500' src={Img4} alt='' />
                                {/* pretitle */}
                                <div className='absolute -bottom-full left-5 group-hover:bottom-14 transition-all duration-500 z-50'>
                                    <span className='text-gradient text-sm'>Front-End</span>
                                </div>
                                {/* title */}
                                <div className='absolute -bottom-full left-5 group-hover:bottom-5 transition-all duration-700 z-50'>
                                    <span className='text-2xl text-white'>Stroke Prediction & Care</span>
                                </div>
                            </Link>
                            <Link to='/project-gojek' className='group relative overflow-hidden border-2 border-accent/50 dark:border-white/50 rounded-xl mt-5 mb-5 lg:mb-5'>
                                {/* overlay */}
                                <div className='group-hover:bg-black/25 w-full h-full absolute z-40 transition-all duration-300'></div>
                                {/* img */}
                                <img className='group-hover:scale-125 transition-all duration-500' src={Img5} alt='' />
                                {/* pretitle */}
                                <div className='absolute -bottom-full left-5 group-hover:bottom-14 transition-all duration-500 z-50'>
                                    <span className='text-gradient text-sm'>Full Stack</span>
                                </div>
                                {/* title */}
                                <div className='absolute -bottom-full left-5 group-hover:bottom-5 transition-all duration-700 z-50'>
                                    <span className='text-2xl text-white'>Prediksi Total Transaksi di Aplikasi Gojek</span>
                                </div>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
        <section id='project'>
            <div className='container mx-auto my-auto pb-20'>
                {/* Report Based */}
                <motion.div variants={fadeIn('left', 0.2)} initial='hidden' whileInView={'show'} viewport={{ once: false, amout: 0.3 }}><h2 className='h2 text-accent justify-start mt-24 mb-10'>Report Based.</h2></motion.div>
                <motion.div variants={fadeIn('up', 0.5)} initial='hidden' whileInView={'show'} viewport={{ once: false, amout: 0.3 }} className='flex-1'>
                    <div>
                    {project.map((service, index) => {
                        const { name, description, link, learn } = service;
                        return (
                        <div className='border-b border-dark/20 dark:border-white/20 mb-[38px] flex' key={index}>
                            <div className='max-w-[476px] lg:max-w-[1000px]'>
                            <h4 className='text-dark dark:text-white text-[20px] tracking-wider font-primary font-semibold mb-6'>
                                {name}
                            </h4>
                            <p className='text-dark dark:text-white font-secondary leading-tight mb-5'>
                                {description}
                            </p>
                            </div>
                            <div className='flex flex-col flex-1 items-end'>
                            <a href={process.env.PUBLIC_URL + link} download className='btn w-9 h-9 mb-[42px] flex justify-center items-center border-2 border-accent/50 dark:border-white'>
                                <BsArrowDown />
                            </a>
                            <a href={process.env.PUBLIC_URL + link} className='text-gradient text-sm'>{learn}</a>
                            </div>
                        </div>
                        );
                    })}
                    </div>
                </motion.div>
            </div>
        </section>
        </>
    );
};

export default MyProject;
