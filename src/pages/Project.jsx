import React from 'react'
import { ThemeProvider } from './../dist/ThemeContext';
// components
import {Header, MyProject} from './../components'

const Project = () => {
    return (
        <>
        <ThemeProvider>
        <div className='bg-site-1 dark:bg-site bg-no-repeat bg-cover overflow-hidden'>
            <Header />
            <MyProject />
        </div>
        </ThemeProvider>
        </>
    )
}

export default Project