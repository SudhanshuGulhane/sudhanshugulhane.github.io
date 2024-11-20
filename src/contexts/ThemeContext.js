import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setDarkMode] = useState("dark");

  const toggleTheme = () => {
    setDarkMode((curr) => {
        const newMode = curr === "light" ? "dark" : "light";
        document.body.style.backgroundColor = newMode === "dark" ? "#180A0A" : "cornsilk";
        return newMode;
    });
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
