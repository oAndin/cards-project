import { createContext, useState } from "react";

export const ThemeContext = createContext();

// eslint-disable-next-line react/prop-types
export const ThemeProvider = ({ children }) => {

  const [darkMode, setDarkMode] = useState(true);
  localStorage.setItem("darkMode", JSON.stringify(darkMode));
  const bgColor = darkMode ? 'bg-dark-grey' : 'bg-easy-white';
  const textColor = darkMode ? 'text-easy-white' : 'text-dark-grey';
  const borderColor = darkMode ? 'border-easy-white' : 'border-dark-grey';

  function toggleTheme() {
    setDarkMode(!darkMode);
  }

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme, bgColor, textColor, borderColor }}>
      {children}
    </ThemeContext.Provider>
  )

}


