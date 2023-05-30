import React from 'react';
import { ThemeProvider } from './dist/ThemeContext';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';

const App = () => {
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

export default App;
