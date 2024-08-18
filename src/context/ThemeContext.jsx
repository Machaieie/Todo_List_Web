import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
   
    const getInitialTheme = () => {
        const savedTheme = localStorage.getItem('isDarkTheme');
        return savedTheme !== null ? JSON.parse(savedTheme) : false; 
    };

    const [isDarkTheme, setIsDarkTheme] = useState(getInitialTheme);

    const toggleTheme = () => {
        setIsDarkTheme(prevTheme => {
            const newTheme = !prevTheme;
            localStorage.setItem('isDarkTheme', JSON.stringify(newTheme)); 
            return newTheme;
        });
    };


    return (
        <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
