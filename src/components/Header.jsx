import React, { useContext } from 'react';
import { ThemeContext } from '../dist/ThemeContext';
import LogoDark from '../assets/logo.svg';
import Logo from '../assets/logo-light.svg';

const Header = () => {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <header className={`py-8 ${isDarkMode ? 'dark' : ''}`}>
      <div className="container mx-auto">
        <div className="flex justify-between">
          <a href="#">
            {isDarkMode ? (
              <img src={ LogoDark } alt="Logo" />
            ) : (
              <img src={ Logo } alt="Logo" />
            )}
          </a>
          {/* Dark Mode Button */}
          <div className={`flex items-center pl-8 mt-3 lg:mt-0 ${isDarkMode ? 'dark' : ''}`}>
            <span className="dir mr-2 font-tertiary sm:text-sm text-md dark:text-white text-dark">
              Light
            </span>
            <label htmlFor="dark-toggle">
              <div className={`switch ${isDarkMode ? 'dark' : ''}`}>
                <input
                  type="checkbox"
                  className="hidden"
                  id="dark-toggle"
                  checked={isDarkMode}
                  onChange={toggleDarkMode}
                />
                <span className={`slider ${isDarkMode ? 'dark' : ''}`}></span>
              </div>
            </label>
            <span className="dir ml-2 font-tertiary sm:text-sm text-md dark:text-white text-dark">
              Dark
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
