import { createContext, useState } from "react";


// import the context 
// const theme = useContext(ThemeContext);

export const ThemeContext = createContext();

// eslint-disable-next-line react/prop-types
export const ThemeProvider = ({ children }) => {

  const [darkMode, setDarkMode] = useState(true);
  let bgColor = darkMode ? 'dark-grey' : 'white';
  let textColor = darkMode ? 'white' : 'dark-grey';

  function toggleTheme() {
    setDarkMode(!darkMode);
  }

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme, bgColor, textColor }}>
      {children}
    </ThemeContext.Provider>
  )

}


