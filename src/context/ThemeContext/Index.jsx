import { createContext, useState } from "react";

export const ThemeContext = createContext();

// eslint-disable-next-line react/prop-types
export const ThemeProvider = ({ children }) => {

  const [darkMode, setDarkMode] = useState(true);
  // const [bgColor, setBgColor] = useState('dark-grey')
  // setBgColor(darkMode ? 'dark-grey' : 'white');
  const textColor = darkMode ? 'white' : 'dark-grey';
  const bgColor = darkMode ? 'dark-grey' : 'white';

  function toggleTheme() {
    setDarkMode(!darkMode);
  }

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme, bgColor, textColor }}>
      {children}
    </ThemeContext.Provider>
  )

}


