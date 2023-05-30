import React, { createContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const theme = localStorage.getItem('theme');
        if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        setIsDarkMode(true);
        document.documentElement.classList.add('dark');
        } else {
        setIsDarkMode(false);
        document.documentElement.classList.remove('dark');
        }
    }, []);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        if (isDarkMode) {
        localStorage.setItem('theme', 'light');
        document.documentElement.classList.remove('dark');
        } else {
        localStorage.setItem('theme', 'dark');
        document.documentElement.classList.add('dark');
        }
    };

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
        {children}
        </ThemeContext.Provider>
    );
};

export { ThemeContext, ThemeProvider };
