import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../dist/ThemeContext';
import LogoDark from '../../assets/logo.svg';
import Logo from '../../assets/logo-light.svg';
import { Link } from 'react-router-dom';

const Nav_Project = () => {
    const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    return (
        <section>
            <div className="container mx-auto mb-8">
                <div className="py-8 flex justify-between">
                    <Link className={`${isMenuOpen ? 'block' : 'block'} lg:block`} to="/">
                    {isDarkMode ? (
                        <img src={LogoDark} alt="Logo" />
                    ) : (
                        <img src={Logo} alt="Logo" />
                    )}
                    </Link>
                    <button
                        id="hamburger"
                        name="hamburger"
                        type="button"
                        className={`block absolute top-10 right-8 lg:hidden ${
                        isMenuOpen ? 'hamburger-active' : ''
                        }`}
                        onClick={toggleMenu}
                    >
                        <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
                        <span className="hamburger-line duration-300 ease-in-out"></span>
                        <span className="hamburger-line duration-300 ease-in-out origin-bottom-left"></span>
                    </button>
                    <nav className={`flex ${isDarkMode ? 'dark' : ''} ${isMenuOpen ? 'block' : 'hidden'} lg:block border-2 py-5 lg:py-0 lg:border-0 rounded-lg border-dark dark:border-white`}>
                        <div className={`flex flex-col-reverse lg:flex-row lg:items-center lg:mt-0 ${ isDarkMode ? 'dark' : '' }`} >
                            <div className='flex flex-col lg:flex-row'>
                                {/* Link */}
                                <Link
                                    className="nav-link dark:text-white text-dark font-extrabold pr-20 lg:pr-0 pl-8 lg:pl-0 mb-5 lg:mb-0 lg:mx-5"
                                    to="/"
                                    aria-current="page"
                                >
                                    Portfolio
                                </Link>
                                <div className='-mt-3 mb-1 border-b-2'></div>
                                <Link
                                    className="nav-link dark:text-white text-dark font-extrabold pr-20 lg:pr-0 pl-8 lg:pl-0 mb-5 lg:mb-0 lg:mx-5 lg:mr-12"
                                    to="/project"
                                    aria-current="page"
                                >
                                    Project
                                </Link>
                            </div>
                            {/* Dark Mode Button */}
                            <div className='flex flex-row mr-20 lg:mr-0 ml-10 mb-5 lg:ml-0 lg:mb-0 pb-2 lg:pb-0 border-b-2 lg:border-b-0 border-dark dark:border-white'>
                                <span className="flex flex-row my-auto mr-2 font-tertiary text-sm lg:text-md dark:text-white text-dark font-extrabold">
                                    Light
                                </span>
                                <label htmlFor="dark-toggle">
                                    <div
                                    className={`mt-2 switch ${isDarkMode ? 'dark' : ''}`}
                                    >
                                        <input
                                            type="checkbox"
                                            className="hidden"
                                            id="dark-toggle"
                                            checked={isDarkMode}
                                            onChange={toggleDarkMode}
                                        />
                                        <span
                                            className={`slider ${isDarkMode ? 'dark' : ''}`}
                                        ></span>
                                    </div>
                                </label>
                                <span className="flex flex-row my-auto ml-2 font-tertiary text-sm lg:text-md dark:text-white text-dark font-extrabold">
                                    Dark
                                </span>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </section>
    );
};

export default Nav_Project;