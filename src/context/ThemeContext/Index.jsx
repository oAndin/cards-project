import { createContext, useState } from "react";

export const ThemeContext = createContext();

// eslint-disable-next-line react/prop-types
export const ThemeProvider = ({ children }) => {

  const [darkMode, setDarkMode] = useState(true);
  localStorage.setItem("darkMode", JSON.stringify(darkMode));

  const primaryColor = darkMode ? '' : '';
  const secondaryColor = darkMode ? '' : '';
  const bgColor = darkMode ? 'bg-grey-900 duration-500' : 'bg-grey-200 duration-500';
  const secondBgColor = darkMode ? 'bg-grey-200 duration-500' : 'bg-grey-700 duration-500';
  const textColor = darkMode ? 'text-grey-200' : 'text-grey-900';
  const secondaryTextColor = darkMode ? 'text-grey-900' : 'text-grey-200';
  const borderColor = darkMode ? 'border-grey-200' : 'border-grey-900';

  function toggleTheme() {
    setDarkMode(!darkMode);
  }

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme, bgColor, textColor, borderColor, secondBgColor, secondaryTextColor }}>
      {children}
    </ThemeContext.Provider>
  )

}


