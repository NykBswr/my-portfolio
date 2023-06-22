import React from 'react';
import { ThemeProvider } from './../dist/ThemeContext';
// components
import {Banner, Header, Nav, About, Services, Work, Contact} from './../components'

const Portfolio = () => {
    return (
        <ThemeProvider>
        <div className='bg-site-1 dark:bg-site bg-no-repeat bg-cover overflow-hidden'>
            <Header />
            <Banner />
            <Nav />
            <About />
            <Services />
            <Work />
            <Contact />
            {/* <div className='h-[4000px]'></div> */}
        </div>
        </ThemeProvider>
    );
};

export default Portfolio;